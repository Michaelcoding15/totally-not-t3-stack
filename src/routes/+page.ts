import { trpc } from '$lib/trpc/client';
import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => {
	const t = trpc(event);
	try {
		return { greeting: await t.greeting.query() };
	} catch {
		return {
			greeting: 'Not logged in!'
		};
	}
};
