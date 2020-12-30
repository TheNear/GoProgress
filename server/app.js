require("dotenv").config();
const express = require("express");
const path = require("path");
const { ApolloServer, gql  } = require("apollo-server-express");
const mongoose = require("mongoose");
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
mongoose.connect(process.env.MONGO_KEY, { useNewUrlParser: true , useUnifiedTopology: true })

const app = express();
const dbConnect = mongoose.connection;
const PORT = 8080;
const apollo = new ApolloServer({ typeDefs, resolvers });

apollo.applyMiddleware({ app, path: "/graphql", cors: true })
app.use(express.json());
app.use(express.static(path.join(__dirname, "../build")));

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

dbConnect.on("error", (err) => {
  console.log(`DB connection failed with error: ${err}`);
});

dbConnect.once("open", () => {
  console.log("DB connection successful");
});

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
