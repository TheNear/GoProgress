const { gql } = require("apollo-server-express");
const authSchema = require("./authSchema");

const rootSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
`

module.exports = [rootSchema, authSchema];