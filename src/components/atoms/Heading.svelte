<script lang="ts">
	export let type: string | 'main' | 'base' = 'base';
	export let variant: string | 'large' | 'primary' | 'secondary' = 'primary';
	export let size: string | 'large' | 'base' | 'small' = 'base';
	export let color: string | 'black' | 'blackPricing' | 'white' = 'black';
	export let testimony: boolean = false;

	export let id: string = '';
	let className: string = '';
	export { className as class };
</script>

{#if type === 'main'}
	<h1 {id} class="heading {variant} {size} {type} {className}">
		<slot />
	</h1>
{:else if type === 'tagline'}
	<h5 {id} class="tagline {className}">
		<slot />
	</h5>
{:else}
	<h3 {id} class="heading {variant} {size} {testimony ? 'testimony' : ''} {color} {className}">
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
		@apply text-[26px] xl:text-[52px] xl:leading-[1.46];
	}

	.heading.primary.main {
		@apply text-[26px] leading-[1.7] xl:text-[68px];
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
		@apply text-[26px] leading-[1.5] xl:text-[50px];
	}

	.heading.secondary.base.testimony {
		@apply text-xl xl:text-3xl;
	}

	.heading.secondary.small {
		@apply text-xl xl:text-3xl;
	}

	.tagline {
		@apply font-dmSans text-base text-primary xl:text-xl;
	}
</style>
