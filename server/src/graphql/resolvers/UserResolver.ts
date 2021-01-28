import { IResolvers } from "graphql-tools";
import { ApolloContext } from "../../core/apolloServer";

export const userResolver: IResolvers<any, ApolloContext> = { 
  Query: {
    getUserData: async (_parent, _args, { user, models }) => {
      const { userModel } = models;
      // TODO: Обработать неавторизованных пользователей
      const userData = await userModel.findById(user?.uid);
      return userData;
    }
  }
}