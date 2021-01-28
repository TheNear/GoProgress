import { IResolvers } from "graphql-tools";

export const groupResolver: IResolvers = { 
  Mutation: {
    createGroup: async (_parent, args, { user, models }) => {
      const { groupModel, userModel } = models;
      const { name } = args;
      const userData = await userModel.findById(user.uid);
      const newGroup = await groupModel.create({
        name,
        owner: userData,
      });
      await userModel.findByIdAndUpdate(user.uid, {
        group: newGroup,
      });
    }
  }
}