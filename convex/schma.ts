import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  scooter: defineTable({
    name: v.string(),
    price: v.float64(),
  }),
  tasks: defineTable({
    isCompleted: v.boolean(),
    text: v.string(),
  }),
});