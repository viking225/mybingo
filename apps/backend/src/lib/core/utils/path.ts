import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

/**
 * get the directory name of a file form its url
 * @param url
 */
export function __dirname(url: string) {
  return dirname(__filename(url));
}

/**
 * Get the fileName of a file from irs url
 * @param url
 */
export function __filename(url: string) {
  const d = fileURLToPath(url);
  console.log("value: ", d);
  return d;
}
