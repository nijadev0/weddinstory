<script lang="ts">
	import { onMount } from 'svelte';
	import { inView, animate, stagger } from 'motion';

	import Title from '$moleculs/Title.svelte';

	import Circle from '$icons/Circle.svelte';
	import ArrowDown from '$icons/ArrowDown.svelte';

	export let heading: string = '';
	export let description: string = '';
	export let image: string = '';
	export let index: number = 0;

	onMount(() => {
		inView('#feature', ({ target }) => {
			animate(
				target.querySelectorAll('#featureAnimate'),
				{ opacity: [0, 1], y: [40, 0] },
				{
					delay: stagger(0.25, { start: 0.5 }),
					duration: 0.75,
					easing: 'ease-in-out',
					offset: [0, 1]
				}
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

	<div id="featureAnimate" class="text">
		<div>
			<Title id="feature-text" variant="secondary" {heading} {description} feature />
		</div>

		<div id="feature-text" class="icon arrow-down">
			<ArrowDown />
		</div>
	</div>

	<div id="featureAnimate" class="photo">
		<img class="image" src={image} alt={image} />
	</div>
</section>

<style lang="postcss">
	.feature {
		@apply relative my-0 flex flex-col items-center gap-5 py-10 md:flex-row md:items-center md:justify-between md:gap-14 xl:my-10 xl:gap-[75px];
	}

	.feature.reverse {
		@apply md:flex-row-reverse;
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
