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
		class="absolute xl:h-[676px] xl:w-[681px] {index === 1
			? '-left-[32rem] -top-40'
			: '-right-[32rem] -top-96'} z-0 opacity-80"
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
		@apply relative my-10 flex flex-col items-center gap-5 py-12 xl:flex-row xl:items-center xl:gap-[75px];
	}

	.feature.reverse {
		@apply xl:flex-row-reverse;
	}

	.text {
		@apply z-10 max-w-[528px];
	}

	.photo {
		@apply relative z-10 h-full w-full min-w-[352px] xl:max-w-[605px];
	}

	.image {
		@apply h-full w-full object-cover;
	}

	.icon.arrow-down {
		@apply hidden xl:block;
	}
</style>
