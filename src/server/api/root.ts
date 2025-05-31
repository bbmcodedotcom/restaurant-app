import { createTRPCRouter } from './trpc';
import { exampleRouter } from './routers/example';

export const appRouter = createTRPCRouter({
  example: exampleRouter,
});

// Export type definition of API
export type AppRouter = typeof appRouter;
