<script lang="ts">
	export let variant: string | 'primary' | 'secondary' | 'terniary' = 'primary';
	export let size: string | 'large' | 'base' | 'small' = 'large';

	let className: string = '';
	export { className as class };
</script>

<p class="para {variant} {size} {className}">
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
		@apply text-base;
	}

	.para.primary.small {
		@apply leading-[24px];
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
		@apply text-sm;
	}
</style>
