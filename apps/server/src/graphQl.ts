import fs from "fs";
import path from "node:path";
import { __dirname } from "@/utils.js";

const typeDefs = fs.readFileSync(
  path.join(__dirname(), "schema.graphql"),
  "utf8",
);

const resolvers = {};

export { typeDefs, resolvers };
