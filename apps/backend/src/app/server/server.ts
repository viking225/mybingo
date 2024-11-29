import express, { Express } from "express";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServer } from "@apollo/server";
import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";

import cors from "cors";
import { Container } from "inversify";
import { buildAppResolvers } from "@app/resolvers";
import typeDefs from "@/lib/core/schema/typeDef";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import * as http from "node:http";
import { Server } from "node:http";

export function configureApp(app: Express, server: ApolloServer) {
  app.use(
    "/graphql",
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(server),
  );
}

export function createHttpServer(app: Express) {
  return http.createServer(app);
}

export function createApolloServer({
  container,
  httpServer,
}: {
  container: Container;
  httpServer: Server;
}) {
  return new ApolloServer({
    schema: addMocksToSchema({
      schema: makeExecutableSchema({
        typeDefs,
        resolvers: buildAppResolvers(container),
      }),
    }),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
}
