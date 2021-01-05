const { ApolloServer } = require("apollo-server-express");
const schemas = require("../schema");
const resolvers = require("../resolvers");
const models = require("../modules");

const apolloStart = async (app) => {
  try {
    const apolloServer = new ApolloServer({
      typeDefs: schemas,
      resolvers,
      context: async ({ req }) => {
        return {
          models: models,
        }
      }
    })
  
    apolloServer.applyMiddleware({ app });
  } catch (error) {
    throw error;
  }
};

module.exports = apolloStart;