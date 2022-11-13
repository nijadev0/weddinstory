<script lang="ts">
	import Title from '../moleculs/Title.svelte';

	import Circle from '$lib/icons/Circle.svelte';

	export let heading: string = '';
	export let description: string = '';
	export let image: string = '';
	export let index: number = 0;
</script>

<section class="feature">
	<Circle
		class="absolute {index === 1 ? '-left-[50%] -top-32' : '-right-[50%] -top-20'} z-0 opacity-80"
	/>

	<div class="text">
		<Title variant="secondary" {heading} {description} />
	</div>

	<div class="photo">
		<img class="image" src={image} alt={image} />
	</div>
</section>

<style lang="postcss">
	.feature {
		@apply relative flex flex-col items-center gap-5 pt-12 pb-[46px];
	}

	.text {
		@apply z-10;
	}

	.photo {
		@apply relative z-10 h-full w-full min-w-[352px];
	}

	.image {
		@apply h-full w-full object-cover;
	}
</style>
