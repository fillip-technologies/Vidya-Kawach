import { pgTable, uuid, text, numeric, boolean, jsonb } from "drizzle-orm/pg-core";

export const hospitals = pgTable("hospitals", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  address: text("address"),
  city: text("city"),
  pincode: text("pincode"),
  phone: text("phone"),
  specialities: jsonb("specialities"),
  latitude: numeric("latitude"),
  longitude: numeric("longitude"),
  isNetwork: boolean("is_network").notNull().default(false),
});
