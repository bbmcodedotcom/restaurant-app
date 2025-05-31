import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';

export const exampleRouter = createTRPCRouter({
  getExample: publicProcedure.query(() => {
    return { message: 'Hello from the example router!' };
  }),
  createExample: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ input, ctx }) => {
      // Logic to create an example entry in the database
      return { name: input.name, id: Math.random().toString() };
    }),
});
