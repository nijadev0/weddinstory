<script lang="ts">
	import Title from '../moleculs/Title.svelte';
	import Card from '../moleculs/Card.svelte';

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
</script>

<section class="pricing">
	<div class="heading-wrapper">
		<Title
			variant="primary"
			position="center"
			heading="Paket Invitation"
			description="Rencanakan undangan terbaikmu bersama kami"
		/>
	</div>
	<div class="card-wrapper">
		{#each data as { isBest, heading, price }}
			<Card {advantage} {isBest} {heading} {price} variant="pricing" />
		{/each}
	</div>
</section>

<style lang="postcss">
	.pricing {
		@apply w-full py-12;
	}

	.heading-wrapper {
		@app flex flex-col items-center gap-5;
	}

	.card-wrapper {
		@apply flex w-full flex-col items-center gap-5;
	}
</style>
