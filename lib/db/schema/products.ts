import { pgTable, serial, text, integer, timestamp } from 'drizzle-orm/pg-core';

export const products = pgTable('products', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    description: text('description'),
    price: integer('price').notNull(), // Store as cents
    image: text('image'),
    category: text('category'),
    createdAt: timestamp('created_at').defaultNow(),
});
