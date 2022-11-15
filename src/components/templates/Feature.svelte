<script lang="ts">
	import Title from '../moleculs/Title.svelte';

	import Circle from '$lib/icons/Circle.svelte';
	import ArrowDown from '$lib/icons/ArrowDown.svelte';

	export let heading: string = '';
	export let description: string = '';
	export let image: string = '';
	export let index: number = 0;
</script>

<section class="feature {index !== 1 && 'reverse'}">
	<Circle
		class="absolute z-0 xl:h-[676px] xl:w-[681px] {index === 1
			? '-top-36 -left-40 xl:-top-40 xl:-left-[32rem]'
			: '-top-0 -right-40 xl:-top-96 xl:-right-[32rem]'}"
	/>

	<div class="text">
		<Title variant="secondary" {heading} {description} feature />

		<div class="icon arrow-down">
			<ArrowDown />
		</div>
	</div>

	<div class="photo">
		<img class="image" src={image} alt={image} />
	</div>
</section>

<style lang="postcss">
	.feature {
		@apply relative my-0 flex flex-col items-center gap-5 py-10 xl:my-10 xl:flex-row xl:items-center xl:gap-[75px];
	}

	.feature.reverse {
		@apply xl:flex-row-reverse;
	}

	.text {
		@apply z-10 max-w-[528px];
	}

	.photo {
		@apply relative z-10 h-full w-full xl:max-w-[605px];
	}

	.image {
		@apply h-full w-full object-cover;
	}

	.icon.arrow-down {
		@apply hidden xl:block;
	}
</style>
