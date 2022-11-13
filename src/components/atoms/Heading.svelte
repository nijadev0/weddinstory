<script lang="ts">
	export let type: string | 'main' | 'base' = 'base';
	export let variant: string | 'large' | 'primary' | 'secondary' = 'primary';
	export let size: string | 'large' | 'base' | 'small' = 'base';
	export let color: string | 'black' | 'blackPricing' | 'white' = 'black';

	let className: string = '';
	export { className as class };
</script>

{#if type === 'main'}
	<h1 class="heading {variant} {className}">
		<slot />
	</h1>
{:else if type === 'tagline'}
	<h5 class="tagline {className}">
		<slot />
	</h5>
{:else}
	<h3 class="heading {variant} {size} {color} {className}">
		<slot />
	</h3>
{/if}

<style lang="postcss">
	.heading {
		@apply leading-[44px] text-[#121212];
	}

	.heading.primary {
		@apply font-playfair font-medium;
	}

	.heading.primary.base {
		@apply text-[26px];
	}

	.heading.primary.small {
		@apply text-2xl font-normal;
	}

	.heading.secondary.white {
		@apply font-dmSans font-normal;
	}

	.heading.secondary.black {
		@apply text-[#252324];
	}

	.heading.secondary.blackPricing {
		@apply text-[#121212]/80;
	}

	.heading.secondary.white {
		@apply text-white;
	}

	.heading.secondary.orange {
		@apply text-primary;
	}

	.heading.secondary.large {
		@apply text-[42px];
	}

	.heading.secondary.base {
		@apply text-[26px];
	}

	.heading.secondary.small {
		@apply text-xl;
	}

	.tagline {
		@apply font-dmSans text-base text-primary;
	}
</style>
