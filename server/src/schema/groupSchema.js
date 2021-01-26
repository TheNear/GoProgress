const { gql } = require("apollo-server-express");

module.exports = gql`
  extend type Mutation {
    createGroup(name: String!): Boolean
  }

`;