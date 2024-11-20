import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import fs from "fs";
import express from "express";
import path, { dirname } from "node:path";
import { __dirname } from "@/utils.js";

const app = express();

const apolloServer = new ApolloServer({
  typeDefs: () =>
    fs.readFileSync(path.join(__dirname(), "schema.graphql"), "utf8"),
});

await apolloServer.start();

app.use(
  "/graphql",
  cors<cors.CorsRequest>(),
  express.json(),
  expressMiddleware(apolloServer),
);
