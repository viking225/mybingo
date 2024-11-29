import fs from "fs";
import path from "node:path";
import { __dirname } from "@core/utils/path";

export default fs.readFileSync(
  path.join(__dirname(import.meta.url), "schema.graphql"),
  "utf8",
);
