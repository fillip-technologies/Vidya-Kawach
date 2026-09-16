import { pgTable, uuid, text, numeric, jsonb } from "drizzle-orm/pg-core";
import { olympiadPapers } from "./olympiadPapers.js";
import { syllabusTags } from "./syllabusTags.js";

export const olympiadQuestions = pgTable("olympiad_questions", {
  id: uuid("id").primaryKey().defaultRandom(),
  paperId: uuid("paper_id").notNull().references(() => olympiadPapers.id),
  syllabusTagId: uuid("syllabus_tag_id").references(() => syllabusTags.id),
  question: text("question").notNull(),
  options: jsonb("options"),
  correctOption: text("correct_option").notNull(),
  marks: numeric("marks").notNull(),
});
