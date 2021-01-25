const { gql } = require("apollo-server-express");
const authSchema = require("./authSchema");
const userSchema = require("./userSchema");
const groupSchema = require("./groupSchema");

const rootSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
`

module.exports = [rootSchema, authSchema, userSchema, groupSchema];