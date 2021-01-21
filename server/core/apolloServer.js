const { ApolloServer } = require("apollo-server-express");
const schemas = require("../schema");
const resolvers = require("../resolvers");
const models = require("../modules");
const getUser = require("../auth/getUser");

const apolloStart = async (app) => {
  try {
    const apolloServer = new ApolloServer({
      typeDefs: schemas,
      resolvers,
      context: async ({ req }) => {
        const token = req.headers.authorization || '';
        const user = getUser(token);
        console.log(user);
        return {
          models: models,
          user,
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

module.exports = apolloStart;