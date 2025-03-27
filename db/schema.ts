import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const posts = pgTable('posts', {
    id: uuid("id").primaryKey().defaultRandom(),
    title: text("title").notNull(),
    content: text("content").notNull(),
    createdAt : timestamp("created_at").notNull().defaultNow(),
    userId: text("user_id").references(()=> users.id).notNull(),
})

export const users = pgTable('users', {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    image: text("image").notNull(),
    createdAt : timestamp("created_at").notNull().defaultNow(),
})