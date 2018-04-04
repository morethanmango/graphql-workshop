const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");
const { schemaDefinition: typeDefs, resolvers } = require("./graphql");

const PORT = 9000;

const app = express();

app.get("/", (req, res) => res.sendFile(`${__dirname}/views/index.html`));

// Boostrap GraphQL

const logger = { log: (e) => console.log(e) };

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  logger,
});

app.use(cors());
app.use(express.static('public'))
// The GraphQL endpoint
app.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress((req) => {
    const context = { req };
    return { schema, context };
  })
);

// GraphiQL, a visual editor for queries
app.use(
  "/graphiql",
  graphiqlExpress({
    endpointURL: "/graphql",
    query: `query getTime {
  unixTime
}`,
  })
);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
