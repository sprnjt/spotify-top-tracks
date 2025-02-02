import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Create the ESLint configuration using flat config format
const eslintConfig = [
  // Extend configurations
  ...compat.extends("next/core-web-vitals"),
  ...compat.extends("next/typescript"),
  {
    rules: {
      "no-unused-vars": "off", // Example rule
    },
    // Specify the files to which these rules apply
    files: ["*.js", "*.ts", "*.jsx", "*.tsx"],
  },
];

export default eslintConfig;
