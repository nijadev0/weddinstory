<script lang="ts">
	import Arrow from '$lib/icons/Arrow.svelte';
	import Carousel from '../moleculs/Carousel.svelte';

	import { Navigation } from 'swiper';
	import { Swiper, SwiperSlide } from 'swiper/svelte';

	import 'swiper/css';
	import 'swiper/css/navigation';

	import StarRect from '$lib/icons/StarRect.svelte';
	import { onMount } from 'svelte';
	import { inView, animate, stagger } from 'motion';

	export let isBeginning: boolean = true;
	export let isEnd: boolean = false;

	export let data: any;

	onMount(() => {
		inView('#testimony', ({ target }) => {
			animate(target.querySelectorAll('#testimonyItem'), { opacity: [0, 1] }, { delay: 2 });
			animate(
				target.querySelectorAll('#testimonyItem'),
				{
					opacity: [0, 1],
					y: [40, 0]
				},
				{
					easing: 'ease-in-out',
					delay: stagger(0.25),
					duration: 1,
					offset: [0.5, 1]
				}
			);
		});
	});
</script>

<section id="testimony" class="testimony">
	<StarRect class="absolute -top-3 -left-3 z-10 xl:-top-3" />
	<StarRect class="absolute -bottom-3 -right-3 z-10 xl:-bottom-3" />

	<div id="prev testimonyItem" class="icon left">
		<Arrow
			class="h-[42px] w-[42px] xl:h-12 xl:w-12 {isBeginning === true
				? 'fill-slate-400'
				: 'fill-primary'}"
		/>
	</div>

	<Swiper
		modules={[Navigation]}
		slidesPerView={1}
		grabCursor
		breakpoints={{
			1280: {
				slidesPerView: 2,
				spaceBetween: 30
			}
		}}
		navigation={{ prevEl: '#prev', nextEl: '#next' }}
		on:slideChange={(e) => {
			(isEnd = e.detail[0].isEnd), (isBeginning = e.detail[0].isBeginning);
		}}
	>
		{#each data as { thumbnail, couples, testimony, rate }}
			<SwiperSlide id="testimonyItem">
				<Carousel {thumbnail} {couples} {testimony} {rate} />
			</SwiperSlide>
		{/each}
	</Swiper>

	<div id="next testimonyItem" class="icon right">
		<Arrow
			class="h-[42px] w-[42px] xl:h-12 xl:w-12 {isEnd === true ? 'fill-slate-400' : 'fill-primary'}"
		/>
	</div>
</section>

<style lang="postcss">
	.testimony {
		@apply relative z-10 mb-8 flex min-h-[370px] items-center justify-center rounded-[10px] bg-[#f9f9f9] py-0 
		
		xl:mb-[100px] xl:mt-[64px] xl:min-h-[290px] xl:px-14 xl:pt-11 xl:pb-2;
	}

	.icon {
		@apply absolute top-1/2 z-10 h-max w-max -translate-y-8 cursor-pointer rounded-full shadow-iconArrow;
	}

	.icon.right {
		@apply -right-3;
	}

	.icon.left {
		@apply -left-3 rotate-180;
	}
</style>
