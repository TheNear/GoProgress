// TODO: Валидация на сервере
module.exports = {
  Query: {
    getUserData: async (_parent, _args, { user, models }) => {
      const { userModel } = models;
      const userData = await userModel.findById(user.uid);
      return userData;
    }
  }
}