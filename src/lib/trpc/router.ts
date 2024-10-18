import { protectedProcedure, t } from '$lib/trpc/t';

export const router = t.router({
	greeting: protectedProcedure.query(async ({ ctx }) => {
		return `Hello ${ctx.session.user?.name} @ ${new Date().toLocaleTimeString()}`;
	}),
});

export const createCaller = t.createCallerFactory(router);

export type Router = typeof router;
