<script lang="ts">
	import Star from '../../lib/icons/Star.svelte';

	import Heading from '../atoms/Heading.svelte';
	import Para from '../atoms/Para.svelte';

	export let thumbnail: string = '';
	export let couples: string = '';
	export let testimony: string = '';
	export let rate: number = 5;
</script>

<div class="carousel">
	<div class="thumbnail">
		<img class="photo" src={thumbnail} alt={thumbnail} />
	</div>

	<div class="text">
		<Heading variant="secondary" class="mb-3" testimony>{couples}</Heading>

		<Para variant="secondary" class="mb-3">
			“{testimony}”
		</Para>

		<div class="rating">
			{#each [...Array(rate)] as star}
				<Star />
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	.carousel {
		@apply flex h-full w-full shrink-0 flex-col items-start rounded-[10px] bg-[#f9f9f9] p-5 xl:flex-row xl:gap-5 xl:p-0;
	}

	.thumbnail {
		@apply relative mb-6 h-40 w-full rounded-md bg-zinc-100 bg-cover bg-center bg-no-repeat shadow-carousel xl:max-h-40 xl:max-w-[106px];
	}

	.photo {
		@apply h-full w-full rounded-md object-cover;
	}

	.rating {
		@apply flex items-center gap-2;
	}
</style>
