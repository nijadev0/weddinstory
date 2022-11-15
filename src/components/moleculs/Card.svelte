<script lang="ts">
	import Heading from '../atoms/Heading.svelte';
	import Para from '../atoms/Para.svelte';
	import Check from '$lib/icons/Check.svelte';
	import { numberWithCommas } from '../../utilities/formatCurrency';
	import Button from '../atoms/Button.svelte';
	import BestSeller from '$lib/icons/BestSeller.svelte';

	export let variant: string | 'pricing' | 'base' = 'base';

	export let icon: string = '';
	export let heading: string = '';
	export let description: string = '';
	export let index: number = 0;

	export let price: number = 0;
	export let advantage: string[] = [''];
	export let isBest: boolean = false;
</script>

{#if variant === 'pricing'}
	<div class="card-pricing">
		{#if isBest}
			<BestSeller class="absolute right-0 -top-10 h-[78px] w-[78px]" />
		{/if}
		<div class="heading">
			<Heading variant="primary" size="small" class="mb-5 opacity-80">Paket {heading}</Heading>
			<Heading
				variant="secondary"
				size="large"
				color={isBest ? 'orange' : 'blackPricing'}
				class="font-medium"
			>
				Rp. {numberWithCommas(price)}
			</Heading>
		</div>
		<div class="list-advantage">
			{#each advantage as adv, i}
				<div class="advantage">
					<Check />
					<span
						class="desc {heading === 'Deluxe' && (i === 8 || i === 7 ? 'strike' : '')} {heading ===
							'Basic' && (i === 8 || i === 7 || i === 6 || i === 5 || i === 4 ? 'strike' : '')}"
					>
						{adv}
					</span>
				</div>
			{/each}
		</div>

		<div class="cta flex w-full items-center justify-center">
			<Button
				type="button"
				class="w-full px-10 xl:w-max"
				variant={isBest ? 'primary' : 'secondary'}
			>
				Pesan sekarang
			</Button>
		</div>
	</div>
{:else}
	<div class="card">
		<div class="icon">
			{@html icon}
		</div>

		<div class="text">
			<div class="heading">
				<Heading variant="secondary" size="small" class="font-medium">{heading}</Heading>
				<span class="index">0{index + 1}</span>
			</div>
			<Para size="base">{description}</Para>
		</div>
	</div>
{/if}

<style lang="postcss">
	.card {
		@apply flex flex-row items-start gap-5 xl:flex-col xl:gap-6;
	}

	.card .text {
		@apply flex w-full flex-col items-start justify-start gap-3;
	}

	.card .text .heading {
		@apply flex w-full items-center justify-between;
	}

	.card .text .heading .index {
		@apply font-dmSans text-base font-normal text-[#CDCDCD] xl:text-xl xl:text-[#252324];
	}

	.card-pricing {
		@apply relative flex w-full flex-col items-start gap-5 rounded-[10px] bg-[#F9F9F9] p-6 xl:gap-8 xl:rounded-[20px] xl:p-8;
	}

	.card-pricing .list-advantage {
		@apply flex flex-col items-start gap-3;
	}

	.card-pricing .advantage {
		@apply flex items-center gap-3.5;
	}

	.card-pricing .advantage .desc {
		@apply text-base leading-[1.5] text-[#121212]/60 xl:text-xl;
	}

	.strike {
		@apply line-through;
	}
</style>
