import { TRPCError, initTRPC } from '@trpc/server';
import { type CreateNextContextOptions } from '@trpc/server/adapters/next';
import { z } from 'zod';
import { db } from '../db';

export const createTRPCContext = (opts: CreateNextContextOptions) => {
  const { req, res } = opts;
  return {
    req,
    res,
    db,
  };
};

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: undefined,
  errorFormatter({ shape }) {
    return shape;
  },
});

export const createTRPCRouter = t.router;

export const publicProcedure = t.procedure;
