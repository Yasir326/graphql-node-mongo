const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const graphqlSchema = require('./graphql/schema');
const graphqlResolvers = require('./graphql/resolvers');
const { mongo } = require('mongoose');

const app = express();
const PORT = 5000 || process.env.PORT;

app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  })
);

const uri = process.env.MONGO_URI;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongo
  .connect(uri, options)
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`))
  )
  .catch((error) => {
    throw error;
  });

