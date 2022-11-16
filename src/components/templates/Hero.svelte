<script lang="ts">
	import { animate, stagger } from 'motion';

	import Button from '../../components/atoms/Button.svelte';
	import Title from '../moleculs/Title.svelte';

	import HeroPhoto from '../../lib/images/hero-photo.png';
	import Circle from '$lib/icons/Circle.svelte';
	import Tralalala from '$lib/icons/Tralalala.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		animate(
			'#hero-text',
			{
				y: [40, 0],
				opacity: [0, 1]
			},
			{
				duration: 0.5,
				delay: stagger(0.25),
				easing: 'ease-in-out'
			}
		);

		animate(
			'#hero-image',
			{
				y: [40, 0],
				opacity: [0, 1]
			},
			{
				duration: 0.5,
				delay: 0.5,
				easing: 'ease-in-out'
			}
		);
	});
</script>

<!-- Hero -->
<section id="hero" class="hero">
	<Circle
		class="absolute -top-64 -left-40 z-0 h-[321px] w-[324px] xl:-top-[36rem] xl:-left-80 xl:block xl:h-[603px] xl:w-[608px]"
	/>

	<div class="text">
		<Title
			id="hero-text"
			heading="Sebarkan kabar bahagiamu dalam satu genggaman"
			description="Dengan E-Invitation lebih mudah mengundang siapapun dimanapun dengan 3 ketukan"
			hero
		/>
		<Button
			id="hero-text"
			type="link"
			href="https://wa.me/6281227182500"
			class="w-full px-14 xl:w-max"
		>
			Buat Undangan
		</Button>
	</div>

	<Tralalala class="absolute bottom-[10rem] left-[20rem] hidden xl:block" />

	<div id="hero-image" class="photo">
		<img class="image" src={HeroPhoto} alt="Bikin Undangan Mantap" />
	</div>
</section>

<style lang="postcss">
	.hero {
		@apply relative py-5 xl:grid xl:grid-cols-12 xl:items-center xl:gap-[30px] xl:py-8;
	}

	.text {
		@apply relative mb-12 flex w-full flex-col items-start xl:col-span-6 xl:mb-0;
	}

	.photo {
		@apply min-h-[360px] w-full rounded-[10px] xl:col-span-6 xl:max-h-[658px];
	}
</style>
