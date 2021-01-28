import { ApolloServer } from "apollo-server-express";
import { Express } from "express";
import * as models from "../models";
import { schemaWithResolvers } from "../graphql/schema";
import { getUser } from "../auth/getUser";

export const apolloStart = async (app: Express) => {
  try {
    const apolloServer = new ApolloServer({
      schema: schemaWithResolvers,
      context: async ({ req, res }) => {
        const token = req.headers.authorization || '';
        const user = getUser(token);
        return {
          models: models,
          user,
          res
        }
      },
      formatError: (err) => {
        if (err.message.startsWith('Database Error: ')) {
          return new Error('Internal server error');
        }
        return err;
      }
    })
  
    apolloServer.applyMiddleware({ app });
  } catch (error) {
    throw error;
  }
};