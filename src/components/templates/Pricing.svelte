<script lang="ts">
	import { onMount } from 'svelte';
	import { inView, animate, stagger } from 'motion';

	import Title from '$moleculs/Title.svelte';
	import Card from '$moleculs/Card.svelte';

	let data = [
		{
			isBest: true,
			heading: 'Platinum',
			price: 400000
		},
		{
			isBest: false,
			heading: 'Deluxe',
			price: 300000
		},
		{
			isBest: false,
			heading: 'Basic',
			price: 175000
		}
	];

	let advantage = [
		'Cover invitation',
		'Gallery photo',
		'Maps',
		'Protokol covid-19',
		'Countdown',
		'Download JPG invitation',
		'Kolom ucapan',
		'Konfirmasi kehadiran',
		'Music'
	];

	onMount(() => {
		inView('#pricing', ({ target }) => {
			animate(
				target.querySelectorAll('#benefitHeading'),
				{ opacity: [0, 1], y: [40, 0] },
				{
					delay: stagger(0.25, { start: 0.5 }),
					duration: 0.75,
					easing: 'ease-in-out',
					offset: [0, 1]
				}
			);
		});

		inView('#card-pricing', ({ target }) => {
			animate(
				target.querySelectorAll('.card-pricing'),
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

<section id="pricing" class="pricing">
	<div id="pricing-animate" class="heading-wrapper">
		<Title
			variant="primary"
			position="center"
			heading="Paket Invitation"
			description="Rencanakan undangan terbaikmu bersama kami"
		/>
	</div>
	<div id="card-pricing" class="card-wrapper">
		{#each data as { isBest, heading, price }}
			<Card {advantage} {isBest} {heading} {price} variant="pricing" />
		{/each}
	</div>
</section>

<style lang="postcss">
	.pricing {
		@apply relative z-30 w-full py-12 xl:pb-[180px];
	}

	.heading-wrapper {
		@app flex flex-col items-center gap-5;
	}

	.card-wrapper {
		@apply flex w-full flex-col items-center gap-5 xl:flex-row xl:gap-[30px];
	}
</style>
