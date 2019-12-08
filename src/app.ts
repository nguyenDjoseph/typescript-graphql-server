import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

import { TaskResolver } from "./resolvers/TaskResolver";
// asynchronously initializes the server 
// allows us to use await
(async () => {
    const app = express();

    await createConnection();

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [TaskResolver]
        }),
        context: ({ req, res }) => ({ req, res }) 
    })

    apolloServer.applyMiddleware({ app, cors: false });

    app.listen(8080, () => {
        console.log(`Express server listening on port 8080`);
    });
})();