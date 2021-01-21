const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SALT, SECRET } = require("../core/config");


// TODO: Валидация на сервере
module.exports = {
  Query: {
    users: async (_parent, _args, { models }) => {
      const { userModel } = models;
      return await userModel.find({});
    },
  },
  Mutation: {
    createUser: async (_parent, args, { models }) => {
      const { name, email, password } = args;
      const { userModel } = models;

      const isEmailUsed = await userModel.findOne({ email });
      if (isEmailUsed) {
        throw new Error("email:Такая почта уже занята.")
      }
      const isNameUsed = await userModel.findOne({ name });
      if (isNameUsed) {
        throw new Error("username:Такое имя уже существует.")
      }

      const newUser = await userModel.create({
        name,
        email,
        password: bcrypt.hashSync(password, SALT),
      });
      return {
        token: jwt.sign({ uid: newUser._id }, SECRET),
      };
    },
    loginUser: async (_parent, args, { models }) => {
      const { email, password } = args;
      const { userModel } = models;

      const user = await userModel.findOne({ email });

      if (!user) {
        throw new Error("email:Неправильная почта/пароль.");
      }

      const isMatch = bcrypt.compareSync(password, user.password);

      if (!isMatch) {
        throw new Error("email:Неправильная почта/пароль.");
      }

      return {
        token: jwt.sign({ uid: user._id }, SECRET),
      };
    },
  },
};
