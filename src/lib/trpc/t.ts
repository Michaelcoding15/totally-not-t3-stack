import { initTRPC, TRPCError } from '@trpc/server';
import type { Context } from '$lib/trpc/context';

export const t = initTRPC.context<Context>().create();

export const auth = t.middleware(async ({ ctx, next }) => {
	const session = await ctx.event.locals.auth()
	if (!session) {
		throw new TRPCError({ code: 'UNAUTHORIZED' })
	}
	return next({ ctx: { session, auth: null as never } })
})

export const publicProcedure = t.procedure
export const protectedProcedure = t.procedure.use(auth)