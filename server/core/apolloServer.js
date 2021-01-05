const { ApolloServer } = require("apollo-server-express");
const schemas = require("../schemas");
const resolvers = require("../resolvers");

const apolloStart = async (app) => {
  try {
    const apolloServer = new ApolloServer({
      typeDefs: schemas,
      resolvers
    })
  
    apolloServer.applyMiddleware({ app });
  } catch (error) {
    throw error;
  }
};

module.exports = apolloStart;