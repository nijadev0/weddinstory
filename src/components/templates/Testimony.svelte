<script lang="ts">
	import Arrow from '$lib/icons/Arrow.svelte';
	import Carousel from '../moleculs/Carousel.svelte';

	import { Navigation } from 'swiper';
	import { Swiper, SwiperSlide } from 'swiper/svelte';

	import 'swiper/css';
	import 'swiper/css/navigation';
	import StarRect from '$lib/icons/StarRect.svelte';

	export let data: any;
</script>

<section class="testimony">
	<StarRect class="absolute -top-3 -left-3 z-10 xl:-top-3" />
	<StarRect class="absolute -bottom-3 -right-3 z-10 xl:-bottom-3" />

	<div id="prev" class="icon left">
		<Arrow class="h-[42px] w-[42px] xl:h-12 xl:w-12" />
	</div>

	<Swiper
		modules={[Navigation]}
		slidesPerView={1}
		breakpoints={{
			1280: {
				slidesPerView: 2,
				spaceBetween: 30
			}
		}}
		navigation={{ prevEl: '#prev', nextEl: '#next' }}
	>
		{#each data as { thumbnail, couples, testimony, rate }}
			<SwiperSlide>
				<Carousel {thumbnail} {couples} {testimony} {rate} />
			</SwiperSlide>
		{/each}
	</Swiper>

	<div id="next" class="icon right">
		<Arrow class="h-[42px] w-[42px] xl:h-12 xl:w-12" />
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
