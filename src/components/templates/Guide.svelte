<script lang="ts">
	import Trililili from '$lib/icons/Trililili.svelte';
	import Button from '../atoms/Button.svelte';
	import Card from '../moleculs/Card.svelte';
	import Title from '../moleculs/Title.svelte';

	interface Guide {
		icon?: string;
		heading: string;
		description: string;
	}

	export let data: Guide[];
</script>

<section class="guide">
	<div class="relative flex flex-col items-start">
		<Trililili class="absolute top-10 left-32 hidden xl:block" />
		<Title guide heading="Cara Pemesanan" description="Hanya 3 langkah untuk membuat undangmu" />
		<Button href="https://wa.me/6281227182500" variant="primary" class="hidden px-10 xl:block">
			Pesan Sekarang
		</Button>
	</div>

	<div class="wrap">
		{#each data as { icon, heading, description }, index}
			<Card {icon} {heading} {description} {index} />
		{/each}
	</div>

	<Button variant="primary" href="https://wa.me/6281227182500" class="block w-full px-10 xl:hidden">
		Pesan Sekarang
	</Button>
</section>

<style lang="postcss">
	.guide {
		@apply relative flex flex-col items-start gap-5 py-12 xl:flex-row xl:gap-[50px] xl:py-[132px];
	}

	.wrap {
		@apply mb-6 flex flex-col items-start gap-10 xl:mb-0 xl:flex-row xl:gap-[30px];
	}
</style>
