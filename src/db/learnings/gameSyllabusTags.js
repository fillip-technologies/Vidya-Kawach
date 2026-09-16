import { pgTable, uuid, primaryKey } from "drizzle-orm/pg-core";
import { games } from "./games.js";
import { syllabusTags } from "./syllabusTags.js";

export const gameSyllabusTags = pgTable("game_syllabus_tags", {
  gameId: uuid("game_id").notNull().references(() => games.id),
  syllabusTagId: uuid("syllabus_tag_id").notNull().references(() => syllabusTags.id),
}, (t) => [primaryKey({ columns: [t.gameId, t.syllabusTagId] })]);
