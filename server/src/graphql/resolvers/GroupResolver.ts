import { IResolvers } from "graphql-tools";
import { ApolloContext } from "../../core/apolloServer";

export const groupResolver: IResolvers<any, ApolloContext> = { 
  Mutation: {
    createGroup: async (_parent, args, { user, models }) => {
      const { groupModel, userModel } = models;
      const { name } = args;
      // TODO: Обработать неавторизованных пользователей
      const userData = await userModel.findById(user?.uid);
      const newGroup = await groupModel.create({
        name,
        owner: userData,
      });
      await userModel.findByIdAndUpdate(user?.uid, {
        group: newGroup,
      });
    }
  }
}