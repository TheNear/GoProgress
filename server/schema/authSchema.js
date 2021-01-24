const { gql } = require("apollo-server-express");

module.exports = gql`
  extend type Query {
    getAuthStatus: Boolean
    emailVerify(token: String!): Boolean
  }

  extend type Mutation {
    createUser(name: String!, email: String!, password: String!): Token!
    loginUser(email: String!, password: String!): Token!
    
  }

  type User {
    name: String!
    email: String!
  }

  type Token {
    token: String
  }
`;