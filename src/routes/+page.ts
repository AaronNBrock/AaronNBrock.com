import { fetchBlogsMeta, fetchMemes } from '$lib/assets/js/clientUtils.js';

export const load = async () => {
	const blogMetas = await fetchBlogsMeta({ limit: 3 });
	const memes = await fetchMemes({ limit: 9 });

	return {
		blogMetas,
		memes: memes,
	};
};
