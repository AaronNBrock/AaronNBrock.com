<script lang="ts">
	import type { IService } from '$lib/types';
	import CardBlob from '$lib/assets/svg/CardBlob.svelte';

	export let service: IService;

	let clazz = '';
	export { clazz as class };
</script>

<div class="h-full w-full rounded-xl bg-base-100 p-8 shadow-xl {clazz}">
	<!-- render icon -->
	{#if service?.icon}
		<div class="relative mb-4 flex h-32 w-24 items-end justify-start">
			<div class="absolute left-0 top-0">
				<CardBlob class="z-20 text-base-300" />
			</div>
			<svelte:component this={service?.icon} class="z-20 h-16 w-16 text-primary" />
		</div>
	{/if}
	<div class="prose lg:prose-lg">
		<h3>{service?.title}</h3>
		<p class="">{service?.description}</p>
	</div>
</div>
