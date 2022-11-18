<script lang="ts">
	import { onMount } from 'svelte';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { FreeMode, Navigation } from 'swiper';
	import { inView, animate, stagger } from 'motion';

	import 'swiper/css';
	import 'swiper/css/free-mode';
	import 'swiper/css/navigation';

	import Title from '../moleculs/Title.svelte';
	import Arrow from '$lib/icons/Arrow.svelte';

	export let isBeginning: boolean = true;
	export let isEnd: boolean = false;

	onMount(() => {
		inView('#benefit', ({ target }) => {
			animate(
				target.querySelectorAll('#benefitHeading'),
				{ opacity: [0, 1], y: [40, 0] },
				{
					delay: stagger(0.25, { start: 0.5 }),
					duration: 0.75,
					easing: 'ease-in-out',
					offset: [0, 1]
				}
			);
		});

		inView('#benefitCarousel', ({ target }) => {
			animate(
				target.querySelectorAll('#benefitCarousel-card'),
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

<section id="benefit" class="benefit">
	<Title
		id="benefitHeading"
		variant="terniary"
		heading="Lebih dari 100+ Tema Eksklusif"
		description="Pilih berbagai tema eksklusif dari kami untuk undanganmu"
		benefit
	/>

	<div class="benefit-wrapper">
		<div id="prev" class="icon left">
			<Arrow
				class="h-[42px] w-[42px] fill-slate-400 xl:h-12 xl:w-12 {isBeginning === true
					? 'fill-slate-400'
					: 'fill-primary'}"
			/>
		</div>

		<Swiper
			modules={[Navigation, FreeMode]}
			slidesPerView="auto"
			grabCursor
			breakpoints={{
				768: {
					slidesPerView: 'auto',
					spaceBetween: 20
				},
				1280: {
					slidesPerView: 'auto',
					spaceBetween: 30
				}
			}}
			navigation={{
				prevEl: '#prev',
				nextEl: '#next'
			}}
			on:slideChange={(e) => {
				(isEnd = e.detail[0].isEnd), (isBeginning = e.detail[0].isBeginning);
			}}
			id="benefitCarousel"
		>
			{#each [1, 2, 3, 4, 5, 6] as carousel}
				<SwiperSlide
					id="benefitCarousel-card"
					class="h-full max-h-96 w-full max-w-[24rem] rounded-[15px]"
				>
					<img
						class="benefitCarousel-image"
						src="theme-illustration-{carousel}.png"
						alt="Collection Theme Illustration {carousel}"
					/>
				</SwiperSlide>
			{/each}
		</Swiper>
		<div id="next" class="icon right">
			<Arrow
				class="h-[42px] w-[42px] xl:h-12 xl:w-12 {isEnd === true
					? 'fill-slate-400'
					: 'fill-primary'}"
			/>
		</div>
	</div>
</section>

<style lang="postcss">
	.benefit {
		@apply relative flex max-w-screen-2xl flex-col items-center py-12 xl:mt-11;
	}

	.benefit-wrapper {
		@apply relative;
	}

	.benefitCarousel-image {
		@apply rounded-[15px];
	}

	.icon {
		@apply absolute top-1/2 z-10 h-max w-max -translate-y-1/2 cursor-pointer rounded-full shadow-iconArrow;
	}

	.icon.right {
		@apply -right-3 xl:-right-5;
	}

	.icon.left {
		@apply -left-3 rotate-180 xl:-left-5;
	}
</style>
