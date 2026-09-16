import postgres from "postgres";
import envVariables from "./envConfig.js";

const connection = postgres(envVariables.DATABASE_URL, {
  max: 10,
  idle_timeout: 20,
  connect_timeout: 10,
  ssl: "require",
});

export default connection;
