const { gql } = require("apollo-server-express");
const userSchema = require("./userSchema");

const rootSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
`

module.exports = [rootSchema, userSchema];