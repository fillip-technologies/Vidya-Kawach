import { pgTable, uuid, text, integer, timestamp } from "drizzle-orm/pg-core";
import { students } from "../identity_access/students.js";
import { games } from "./games.js";

export const gameProgress = pgTable("game_progress", {
  id: uuid("id").primaryKey().defaultRandom(),
  studentId: uuid("student_id").notNull().references(() => students.id),
  gameId: uuid("game_id").notNull().references(() => games.id),
  bestScore: integer("best_score").notNull().default(0),
  stars: text("stars"),
  attempts: integer("attempts").notNull().default(0),
  lastPlayedAt: timestamp("last_played_at", { withTimezone: true }),
});
