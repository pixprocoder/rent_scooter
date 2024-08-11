import { query } from "./_generated/server";

export const getScooter = query({
    args:{},
    handler: async (ctx) =>{
        return await ctx.db.query("scooter").collect()
    }
})