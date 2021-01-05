module.exports = {
  Query: {
    users: async (parent, arg, { models: { userModel } }) => {
      return await userModel.find({});
    },
  },
  Mutation: {
    createUser: async (parent, { name, email }, { models: { userModel } }) => {
      const newUser = new userModel({ name, email });
      return newUser.save();
    },
  },
};
