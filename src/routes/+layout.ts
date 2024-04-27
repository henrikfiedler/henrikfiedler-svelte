import type { LayoutLoad } from './$types';
import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

export const load = (async () => {
	injectSpeedInsights();

	return {};
}) satisfies LayoutLoad;
