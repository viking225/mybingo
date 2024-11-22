import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { makeExecutableSchema } from "@graphql-tools/schema";

import cors from "cors";
import fs from "fs";
import express from "express";
import { typeDefs, resolvers } from "@/graphQl.ts";
import { addMocksToSchema } from "@graphql-tools/mock";

const app = express();

const apolloServer = new ApolloServer({
  schema: addMocksToSchema({
    schema: makeExecutableSchema({ typeDefs, resolvers }),
  }),
});

await apolloServer.start();

app.use(
  "/graphql",
  cors<cors.CorsRequest>(),
  express.json(),
  expressMiddleware(apolloServer),
);

app.listen("3000", () => {
  console.log("Server started on 3000");
});
