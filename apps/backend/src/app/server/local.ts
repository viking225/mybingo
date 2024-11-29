import { buildAppContainer } from "@app/server/container.js";
import {
  configureApp,
  createApolloServer,
  createHttpServer,
} from "@app/server/server.js";
import express from "express";
import { CONFIG } from "@app/config/index.js";

export async function startServer() {
  const app = express();
  const container = buildAppContainer();

  const httpServer = createHttpServer(app);
  const apolloServer = createApolloServer(container);

  configureApp(app, apolloServer);

  await new Promise((resolve) => {
    httpServer.listen(
      {
        port: CONFIG.server.port,
      },
      () => {
        console.log(`Server started on ${CONFIG.server.port}`);
        resolve(null);
      },
    );
  });
}

await startServer();
