# graphql-node-mongo

This is a little test (graphql)[https://graphql.org/] api built on top of [Node](https://nodejs.org/en/)
and [Express](https://expressjs.com/) in order to get a better understanding of how Graphql works

## Getting Started

In order to get started you will need to create a [MongoAtlas](https://www.mongodb.com/) account account
create a cluster and add the connection URI to a .env file
or nodemon.json.

### To start the application

- `yarn`
- `yarn start`

### Example Mutation

`mutation{ createArticle(article: {title: "DBZ", body: "Is a great anime"}) { title body createdAt } }`

### Fetching Articles

`{ articles { title body createdAt } }`
