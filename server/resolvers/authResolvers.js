const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const getUser = require("../auth/getUser");
const { SALT, SECRET } = require("../core/config");

// TODO: Валидация на сервере
module.exports = {
  Query: {
    getAuthStatus: async (_parent, _args, { user }) => {
      return user ? true : false;
    },
    emailVerify: async (_parent, { token }, { res, models }) => {
      const { userModel } = models;
      const user = getUser(token);
      console.log(user);
      const userGet = await userModel.findById(user.uid);
      console.log(userGet);
    },
  },
  Mutation: {
    createUser: async (_parent, args, { models }) => {
      const { name, email, password } = args;
      const { userModel } = models;

      const isEmailUsed = await userModel.findOne({ email: { $regex : new RegExp(email, "i") }});
      if (isEmailUsed) {
        throw new Error("email:Такая почта уже занята.");
      }
      const isNameUsed = await userModel.findOne({ name: { $regex : new RegExp(name, "i") } });
      if (isNameUsed) {
        throw new Error("username:Такое имя уже существует.");
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

      const user = await userModel.findOne({ email: { $regex : new RegExp(email, "i") } });

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
