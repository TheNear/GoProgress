const { gql } = require("apollo-server-express");

module.exports = gql`
  extend type Query {
    getUserData: User
  }

  type User {
    name: String
    email: String
  }
`;