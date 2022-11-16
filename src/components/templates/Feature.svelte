<script lang="ts">
	import Title from '../moleculs/Title.svelte';

	import Circle from '$lib/icons/Circle.svelte';
	import ArrowDown from '$lib/icons/ArrowDown.svelte';
	import { onMount } from 'svelte';
	import { inView, animate, stagger, scroll, ScrollOffset } from 'motion';

	export let heading: string = '';
	export let description: string = '';
	export let image: string = '';
	export let index: number = 0;

	onMount(() => {
		// inView('#feature div', ({ target }) => {
		// });

		inView('#feature', ({ target }) => {
			animate(
				target.querySelectorAll('#child'),
				{ opacity: [0, 1], y: [40, 0] },
				{ delay: stagger(0.25), duration: 0.75, easing: 'ease-in-out', offset: [0, 1] }
			);
		});
	});
</script>

<section id="feature" class="feature {index !== 1 && 'reverse'}">
	<Circle
		class="absolute z-0 xl:h-[676px] xl:w-[681px] {index === 1
			? '-top-36 -left-40 xl:-top-40 xl:-left-[32rem]'
			: '-top-0 -right-40 xl:-top-96 xl:-right-[32rem]'}"
	/>

	<div id="child" class="text">
		<div>
			<Title id="feature-text" variant="secondary" {heading} {description} feature />
		</div>

		<div id="feature-text" class="icon arrow-down">
			<ArrowDown />
		</div>
	</div>

	<div id="child" class="photo">
		<img class="image" src={image} alt={image} />
	</div>
</section>

<style lang="postcss">
	.feature {
		@apply relative my-0 flex flex-col items-center gap-5 py-10 xl:my-10 xl:flex-row xl:items-center xl:justify-between xl:gap-[75px];
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
