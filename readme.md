# graphql server implementation using express-graphql and apollo-server-express

## the app will run on localhost:3000/graphql

## file/folder structure

<img src="/utils/fileFolderStructure.png" />

<hr>

## expressGraphqlServer.js

<p>
This file deals with the implementation of the graphql server using express framework

npm pkgs utilized :
* express-graphql            (use graphqlHTTP)
* @graphql-tools/load-files  (use loadFilesSync)
* @graphql-tools/schema       (use makeExecutableSchema)

loading the graphql and the  resolver files, the <strong>**</strong> at loadFilesSync tell to look into directories and subdirectories for the provided pattern  (line: 11-12)

Making executable schema : (line: 15-18)

using <strong>graphqlHTTP</strong> (line:21-24)

server setup (line: 26-29)
</p>

## apolloServer.js

<p>
This file deals with the implementation of the graphql server using apollo framework

npm pkgs utilized :
* apollo-server-express            (use ApolloServer)
* @graphql-tools/load-files  (use loadFilesSync)

configuring server (line: 12 - 26)
</p>

## products directory

<p>
This directory deals with the queries , data model and resolver functions related to products

## product.graphql file

* query supported (line: 2-6)
* mutation supported (line: 8-11)
* product schema (line: 13-18)
* review schema  (line: 20-24)

## product.model.js

This file contains the data related to products

## product.resolver.js

* This file contains the resolver function for products
* Each query and mutation will have its own resolver function
* the resolver function will get access to following parmeters 
1. parent
2. args
3. context
4. info
* The data returned in the resolver function will be the result of that query
</p>

## orders directory

<p>
This directory deals with the queries , data model and resolver functions related to orders

## order.graphql file

* query supported (line: 1-3)
* order schema (line: 5-9)
* orderItem schema  (line: 11-14)

## order.model.js

This file contains the data related to orders

## order.resolver.js

* This file contains the resolver function for orders
* Each query and mutation will have its own resolver function
* the resolver function will get access to following parmeters 
1. parent
2. args
3. context
4. info
* The data returned in the resolver function will be the result of that query
</p>

## queries.txt

this file contains the example queries 

