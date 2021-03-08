const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const graphqlSchema = require('./graphql/schema');
const graphqlResolvers = require('./graphql/resolvers');
const mongoose = require('mongoose');

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
mongoose.connect(uri, options).catch((error) => {
  throw error;
});

app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));
