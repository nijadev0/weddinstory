<script lang="ts">
	import Heading from '../atoms/Heading.svelte';
	import Para from '../atoms/Para.svelte';
	import Card from '../moleculs/Card.svelte';

	interface Guide {
		icon?: string;
		heading: string;
		description: string;
	}

	export let data: Guide[];
</script>

<section class="guide">
	<Heading class="mb-5">Cara Pemesanan</Heading>
	<Para class="mb-5">Hanya 3 langkah untuk membuat undangmu</Para>

	<div class="wrap">
		{#each data as { icon, heading, description }, index}
			<Card {icon} {heading} {description} {index} />
		{/each}
	</div>
</section>

<style lang="postcss">
	.guide {
		@apply py-12;
	}

	.wrap {
		@apply flex flex-col items-start gap-10;
	}
</style>
