import { drizzle } from "drizzle-orm/postgres-js";
import connection from "./connection.js";
import * as schema from "../db/index.js";

export const db = drizzle({ client: connection, schema });
