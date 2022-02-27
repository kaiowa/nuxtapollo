const express = require('express');
const { ApolloServer } = require('apollo-server-express');

import typeDefs from './typeDefs'
import resolvers from './resolvers'

const server = new ApolloServer({
typeDefs:typeDefs,
resolvers:resolvers,
});

const app = express();
server.start().then((r: any) => {
    server.applyMiddleware({ app });    
});

export default {
    path: "/api",
    handler: app
  };