import { ApolloServer } from "apollo-server-express";
import { Express } from "express";
import { models } from "../models";
import { schemaWithResolvers } from "../graphql/schema";
import { getUserFromJwt, UserObject } from "../auth/jwtService";

export interface ApolloContext {
  models: typeof models,
  user: UserObject | null;
  res: Express.Response;
}


export const apolloStart = async (app: Express) => {
  try {
    const apolloServer = new ApolloServer({
      schema: schemaWithResolvers,
      context: async ({ req, res }): Promise<ApolloContext> => {
        const token = req.headers.authorization || "";
        const user = getUserFromJwt(token);
        return {
          models: models,
          user,
          res,
        };
      },
      formatError: (err) => {
        if (err.message.startsWith("Database Error: ")) {
          return new Error("Internal server error");
        }
        return err;
      },  
    });

    apolloServer.applyMiddleware({ app });
  } catch (error) {
    throw error;
  }
};
