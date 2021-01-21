const { gql } = require("apollo-server-express");

module.exports = gql`
  extend type Query {
    users: [User]!
    user(id: ID!): User!
  }

  extend type Mutation {
    createUser(name: String!, email: String!, password: String!): User!
    loginUser(email: String!, password: String!): User
  }

  type User {
    name: String!
    email: String!
  }
`;