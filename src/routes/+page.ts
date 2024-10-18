import { trpc } from '$lib/trpc/client';
import type { PageLoad } from './$types';
import { safeAwait } from '$lib/safe';

export const load: PageLoad = async (event) => {
	const t = trpc(event);
	const [err, result] = await safeAwait(t.greeting.query);

	if (err) return { greeting: 'Not logged in!' };
	return { greeting: result };
};
