import { IResolvers } from "graphql-tools";

export const userResolver: IResolvers = { 
  Query: {
    getUserData: async (_parent, _args, { user, models }) => {
      const { userModel } = models;
      const userData = await userModel.findById(user.uid);
      return userData;
    }
  }
}