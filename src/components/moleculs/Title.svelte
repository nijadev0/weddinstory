<script lang="ts">
	import Heading from '../../components/atoms/Heading.svelte';
	import Para from '../../components/atoms/Para.svelte';

	import ArrowBtn from '$lib/icons/ArrowBtn.svelte';

	export let variant: string | 'primary' | 'secondary' | 'terniary' = 'primary';
	export let position: string | 'center' = '';
	export let hero: boolean = false;
	export let guide: boolean = false;
	export let feature: boolean = false;
	export let benefit: boolean = false;
	export let id: string = '';
	export let heading: string = '';
	export let description: string = '';
</script>

<div class="title {variant} {position && 'center'}">
	{#if variant === 'secondary'}
		<Heading {id} type="tagline" class="mb-5">Fitur Unggulan</Heading>
	{/if}

	<Heading
		{id}
		type={hero ? 'main' : 'base'}
		class="{(hero && 'mb-5 xl:mb-[44px] max-w-[605px]') ||
			(guide && 'mb-5 xl:mb-7') ||
			'mb-5 xl:mb-9'} {variant === 'terniary' && 'text-center'}"
	>
		{heading}
	</Heading>
	<Para
		{id}
		size="small"
		{hero}
		class="mb-5 max-w-[605px] {(hero && 'mb-8 xl:mb-[60px]') ||
			(guide && 'mb-0 xl:mb-11') ||
			(feature && 'mb-0 xl:mb-[72px]') ||
			(benefit && 'mb-3 xl:mb-9') ||
			'mb-10'} {variant === 'terniary' && 'text-center'}"
	>
		{description}
	</Para>

	{#if variant === 'terniary'}
		<a {id} href="https://instagram.com/weddinstory" class="mb-6 flex items-center gap-2 xl:mb-12">
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
