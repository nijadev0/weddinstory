<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '../atoms/Button.svelte';
	import Card from '../moleculs/Card.svelte';
	import Title from '../moleculs/Title.svelte';

	import Trililili from '$lib/icons/Trililili.svelte';

	interface Guide {
		icon?: string;
		heading: string;
		description: string;
	}

	export let data: Guide[];

	import { animate, inView, stagger } from 'motion';

	onMount(() => {
		inView('#guide-animate', ({ target }) => {
			animate(
				target.querySelectorAll('.card'),
				{ opacity: [0, 1], y: [40, 0] },
				{
					delay: stagger(0.25, { start: 0.5 }),
					duration: 0.75,
					easing: 'ease-in-out',
					offset: [0, 1]
				}
			);
		});
	});
</script>

<section id="guide" class="guide">
	<div class="relative flex flex-col items-start">
		<Trililili class="absolute top-10 left-32 hidden xl:block" />
		<Title guide heading="Cara Pemesanan" description="Hanya 3 langkah untuk membuat undangmu" />
		<Button href="https://wa.me/6281227182500" variant="primary" class="hidden px-10 xl:block">
			Pesan Sekarang
		</Button>
	</div>

	<div id="guide-animate" class="wrap">
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
		@apply relative flex w-full flex-col items-start gap-5 py-12 xl:flex-row xl:gap-[50px] xl:py-[132px];
	}

	.wrap {
		@apply mb-6 flex w-full flex-col items-start gap-10 md:flex-row md:flex-wrap lg:flex-nowrap xl:mb-0 xl:gap-[30px];
	}
</style>
