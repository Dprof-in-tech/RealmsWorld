import baseConfig from "@realms-world/eslint-config/base";
import reactConfig from "@realms-world/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [],
  },
  ...baseConfig,
  ...reactConfig,
];