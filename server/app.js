require("dotenv").config();
const express = require("express");
const path = require("path");
const { ApolloServer, gql  } = require("apollo-server-express");

// MOCKS
const typeDefs = gql`
  type Query {
    hello: String,
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello world!"
  },
}

// END: MOCKS
const app = express();
const PORT = 8080;
const apollo = new ApolloServer({ typeDefs, resolvers });

apollo.applyMiddleware({ app })
app.use(express.json());
// app.use()
app.use(express.static(path.join(__dirname, "../build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});


app.listen(PORT, () => {
  console.log(`Server started ${process.env.TEST_END} on PORT: ${PORT}`);
});
