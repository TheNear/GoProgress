const bcrypt = require("bcrypt");
const { userModel } = require("../modules");
const { SALT } = require("../core/config");


module.exports = {
  Query: {
    users: async (parent, args, { models }) => {
      const { userModel } = models;
      return await userModel.find({});
    },
  },
  Mutation: {
    createUser: async (parent, args, { models }) => {
      const { name, email, password } = args;
      const { userModel } = models;
      const newUser = await userModel.create({
        name,
        email,
        password: bcrypt.hashSync(password, SALT),
      })
      return newUser.save();
    },
    loginUser: async (parent, args) => {
      const { email, password } = args;
      const user = await userModel.findOne({ email,password });
      console.log(user);
      return {
        name: user.name,
        email: user.email,
      }
    },
  },
};
