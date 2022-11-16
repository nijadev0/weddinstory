<script lang="ts">
	export let variant: string | 'primary' | 'secondary' | 'terniary' = 'primary';
	export let size: string | 'large' | 'base' | 'small' = 'large';
	export let hero: boolean = false;

	export let id: string = '';
	let className: string = '';
	export { className as class };
</script>

<p {id} class="para {variant} {size} {hero && 'hero'} {className}">
	<slot />
</p>

<style lang="postcss">
	.para {
		@apply text-sm font-normal;
	}

	.para.primary {
		@apply leading-[28px] text-[#252324];
	}

	.para.primary.base {
		@apply text-base xl:text-xl;
	}

	.para.primary.small {
		@apply leading-[24px] xl:text-[22px] xl:leading-[1.7];
	}

	.para.primary.small.hero {
		@apply xl:text-xl xl:leading-[1.7];
	}

	.para.secondary {
		@apply leading-[26px] text-[#121212]/60;
	}

	.para.terniary {
		@apply leading-[32.4px] text-white;
	}

	.para.terniary.large {
		@apply text-lg;
	}

	.para.terniary.small {
		@apply text-sm xl:text-lg;
	}
</style>
