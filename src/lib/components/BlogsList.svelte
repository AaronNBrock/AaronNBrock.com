<script lang="ts">
	import { loadImageSmall } from '$lib/utils/clientUtils';
	import type { IBlogMeta } from '$lib/types';
	import Img from '@zerodevx/svelte-img';

	export let titleElement = 'h3';

	export let blogMetas: IBlogMeta[];

	let clazz = '';
	export { clazz as class };
</script>

<ul class="grid gap-4 sm:grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] lg:gap-8 {clazz}">
	{#each blogMetas as blogMeta}
		<li>
			<a href={blogMeta.url} class="group">
				<div class="mx-auto w-4/5 overflow-hidden rounded-xl lg:m-0">
					<Img
						src={loadImageSmall(blogMeta.image)}
						alt={blogMeta.imageAlt}
						class="aspect-4/3 w-full scale-110 object-cover duration-300 ease-in-out group-focus-within:scale-100 group-hover:scale-100"
					/>
				</div>

				<div
					class="relative z-10 -mt-16 box-border w-full rounded-xl bg-base-100 p-8 shadow duration-300 ease-in-out group-focus-within:shadow-lg group-hover:shadow-lg lg:float-right lg:w-4/5"
				>
					<span class="pre-line-top-title text-base text-primary">{blogMeta.date}</span>
					<svelte:element
						this={titleElement}
						class="mt-4 text-2xl font-bold group-focus-within:text-primary group-hover:text-primary lg:text-xl xl:text-2xl"
					>
						{blogMeta.title}
					</svelte:element>
				</div>
			</a>
		</li>
	{/each}
</ul>
