<script lang="ts">
	import { slide } from 'svelte/transition';
	import type { PageData } from './$types';

	import Hero from '$components/templates/Hero.svelte';
	import Testimony from '$components/templates/Testimony.svelte';
	import Feature from '$components/templates/Feature.svelte';
	import Benefit from '$components/templates/Benefit.svelte';
	import Guide from '$components/templates/Guide.svelte';
	import Pricing from '$components/templates/Pricing.svelte';

	import Whatsapp from '$lib/icons/Whatsapp.svelte';

	export let data: PageData;

	let currentScrollY: number = 0;
</script>

<svelte:head>
	<title>WeddinStory &mdash; Buat Undangan Pernikahan</title>
</svelte:head>

<svelte:window bind:scrollY={currentScrollY} />

<Hero />

<div transition:slide class="contact">
	<div />
	<a href="https://wa.me/6281227182500">
		<div class="contact-wrapper {currentScrollY > 300 ? 'xl:fixed' : 'xl:static'}">
			<Whatsapp class="h-full max-h-8 w-full max-w-[2rem] ease-out xl:max-h-10 xl:max-w-[40px]" />
			<span class="text"> WhatsApp Kami </span>
		</div>
	</a>
</div>

<Testimony data={data.carousel} />

<section class="features">
	{#each data.feature as { heading, description, image }, index}
		<Feature {heading} {description} {image} {index} />
	{/each}
</section>

<Benefit />

<Guide data={data.guide} />

<Pricing />

<style lang="postcss">
	.contact {
		@apply relative flex min-h-0 justify-end md:py-8 xl:py-20;
	}

	.contact-wrapper {
		@apply fixed bottom-12 right-5 z-50
		
		h-max w-max rounded-full bg-white p-2.5 shadow-iconWhatsapp 
		
		xl:bottom-16 xl:right-12 
		
		xl:flex xl:items-center xl:gap-2 
		
		xl:px-5 xl:py-3;
	}

	.contact .text {
		@apply hidden whitespace-nowrap text-lg font-medium text-[#4DCB5B] xl:block;
	}

	.features {
		@apply relative flex w-full flex-col items-center;
	}
</style>
