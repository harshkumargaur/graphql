const http = require('http');
const path = require('path')
const express = require('express');
const { loadFilesSync } = require('@graphql-tools/load-files');
// const { makeExecutableSchema } = require('@graphql-tools/schema');
const {ApolloServer} = require('apollo-server-express');


const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resolversArray = loadFilesSync(path.join(__dirname,'**/*.resolver.js'));

const startApolloServer = async function(typeDefs,resolvers){
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })
    
    await server.start();
    server.applyMiddleware({app});

    httpServer.listen(3000, () => {
        console.log(`graphql server running at port 3000`);
    })
}

startApolloServer(typesArray,resolversArray);

