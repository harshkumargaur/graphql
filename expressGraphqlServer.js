const http = require('http');
const path = require('path')
const express = require('express');
const app = express();
const { graphqlHTTP } = require('express-graphql');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');



const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resolversArray = loadFilesSync(path.join(__dirname,'**/*.resolver.js'));


const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers:resolversArray
})


app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

const server = http.createServer(app);
server.listen(3000, () => {
    console.log(`graphql server running at port 3000`);
})
