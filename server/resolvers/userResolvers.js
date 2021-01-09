module.exports = {
  Query: {
    users: async (parent, arg, { models: { userModel } }) => {
      return await userModel.find({});
    },
  },
  Mutation: {
    createUser: async (parent, { name, email, password }, { models: { userModel } }) => {
      const newUser = new userModel({ name, email, password });
      return newUser.save();
    },
  },
};
