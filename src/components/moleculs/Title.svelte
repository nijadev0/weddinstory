<script lang="ts">
	import Heading from '../../components/atoms/Heading.svelte';
	import Para from '../../components/atoms/Para.svelte';

	import ArrowBtn from '$lib/icons/ArrowBtn.svelte';

	export let variant: string | 'primary' | 'secondary' | 'terniary' = 'primary';
	export let position: string | 'center' = '';
	export let hero: boolean = false;
	export let guide: boolean = false;
	export let feature: boolean = false;

	export let heading: string = '';
	export let description: string = '';
</script>

<div class="title {variant} {position && 'center'}">
	{#if variant === 'secondary'}
		<Heading type="tagline" class="mb-5">Fitur Unggulan</Heading>
	{/if}

	<Heading
		type={hero ? 'main' : 'base'}
		class="{(hero && 'mb-5 xl:mb-[44px]') || (guide && 'mb-7') || 'mb-5 xl:mb-9'} {variant ===
			'terniary' && 'text-center'}"
	>
		{heading}
	</Heading>
	<Para
		size="small"
		{hero}
		class="mb-5 max-w-[605px] {(hero && 'mb-[60px]') ||
			(guide && 'mb-5 xl:mb-11') ||
			(feature && 'mb-[72px]') ||
			'mb-10'} {variant === 'terniary' && 'text-center'}"
	>
		{description}
	</Para>

	{#if variant === 'terniary'}
		<a href="https://instagram.com/weddinstory" class="mb-12 flex items-center gap-2">
			<span class="btn icon span"> Lihat Semua </span>
			<ArrowBtn />
		</a>
	{/if}
</div>

<style lang="postcss">
	.title {
		@apply flex flex-col;
	}

	.title.primary,
	.title.secondary {
		@apply items-start;
	}

	.title.terniary {
		@apply items-center justify-center;
	}

	.title.primary.center {
		@apply mb-7 items-center justify-center;
	}

	.btn.icon.span {
		@apply text-sm font-medium leading-[28px] text-primary xl:text-xl;
	}
</style>
