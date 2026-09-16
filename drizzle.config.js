import { defineConfig } from "drizzle-kit";
import envVariables from "./src/configs/envConfig.js";

export default defineConfig({
  out: "./drizzle/migrations",
  schema: "./src/db/index.js",
  dialect: "postgresql",
  dbCredentials: {
    url: envVariables.DATABASE_URL,
  },
});
