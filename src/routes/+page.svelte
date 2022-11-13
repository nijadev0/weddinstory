<script lang="ts">
	import type { PageData } from './$types';

	import Hero from '../components/templates/Hero.svelte';
	import Testimony from '../components/templates/Testimony.svelte';
	import Feature from '../components/templates/Feature.svelte';
	import Benefit from '../components/templates/Benefit.svelte';
	import Guide from '../components/templates/Guide.svelte';
	import Pricing from '../components/templates/Pricing.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>WeddinStory &mdash; Buat Undangan Pernikahan</title>
</svelte:head>

<Hero />

<Testimony data={data.carousel} />

<section class="features relative">
	{#each data.feature as { heading, description, image }, index}
		<Feature {heading} {description} {image} {index} />
	{/each}
</section>

<Benefit />

<Guide data={data.guide} />

<Pricing />
