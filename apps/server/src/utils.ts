import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

export function __dirname() {
  return dirname(__filename());
}

export function __filename() {
  return fileURLToPath(import.meta.url);
}
