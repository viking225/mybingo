import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "apps/backend/src/**/*.graphql",
  generates: {
    "apps/client/src/generated/graphql/": {
      plugins: ["typescript", "typescript-operations"],
      documents: ["apps/frontend/src/**/.{query,mutation}.gql"],
    },
    "apps/backend/src/generated/graphql/": {
      plugins: ["typescript", "typescript-resolver"],
    },
  },
};

export default config;
