<script lang="ts">
	import Heading from '../../components/atoms/Heading.svelte';
	import Para from '../../components/atoms/Para.svelte';
	import Button from '../atoms/Button.svelte';

	import ArrowBtn from '$lib/icons/ArrowBtn.svelte';

	export let type: string | 'hero' | 'other' = 'other';
	export let variant: string | 'primary' | 'secondary' | 'terniary' = 'primary';
	export let position: string | 'center' = '';

	export let heading: string = '';
	export let description: string = '';
</script>

<div class="title {variant} {position && 'center'}">
	{#if variant === 'secondary'}
		<Heading type="tagline" class="mb-5">Fitur Unggulan</Heading>
	{/if}

	<Heading
		type={type === 'hero' ? 'main' : 'base'}
		class="mb-5 {variant === 'terniary' && 'text-center'}"
	>
		{heading}
	</Heading>
	<Para size="small" class="mb-5 {variant === 'terniary' && 'text-center'}">
		{description}
	</Para>

	{#if variant === 'terniary'}
		<Button type="link" icon href="https://instagram.com/weddinstory" class="mb-6">
			<span class="btn icon span"> Lihat Semua </span>
			<ArrowBtn />
		</Button>
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
		@apply font-medium leading-[28px] text-primary;
	}
</style>
