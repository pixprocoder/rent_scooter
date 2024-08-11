import { mutation } from "./_generated/server";
import { v } from "convex/values";

// Create a new task with the given text
// export const createTask = mutation({
//   args: { text: v.string() },
//   handler: async (ctx, args) => {
//     const newTaskId = await ctx.db.insert("scooter", { text: args.text });
//     return newTaskId;
//   },
// });

// creating a db to convex
export  const createScooter = mutation({
    args:{name: v.string(), price: v.number()},
    handler: async (ctx, args) =>{
        const newScooterId = await ctx.db.insert("scooter", {name: args.name, price: args.price})
        return newScooterId
    }
})


// user info
