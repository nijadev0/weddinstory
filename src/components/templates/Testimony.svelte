<script lang="ts">
	import Arrow from '$lib/icons/Arrow.svelte';
	import Carousel from '../moleculs/Carousel.svelte';

	import { Navigation } from 'swiper';
	import { Swiper, SwiperSlide } from 'swiper/svelte';

	import 'swiper/css';
	import 'swiper/css/navigation';

	export let data: any;
</script>

<section class="testimony">
	<svg
		class="absolute top-5 -left-3 z-10"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M12 2.16116L14.5377 9.01919L14.6574 9.34262L14.9808 9.4623L21.8388 12L14.9808 14.5377L14.6574 14.6574L14.5377 14.9808L12 21.8388L9.4623 14.9808L9.34262 14.6574L9.01919 14.5377L2.16116 12L9.01919 9.4623L9.34262 9.34262L9.4623 9.01919L12 2.16116Z"
			stroke="#E38064"
			stroke-opacity="0.69"
			stroke-width="1.5"
		/>
	</svg>

	<div id="prev" class="icon left">
		<Arrow class="h-[42px] w-[42px] xl:h-12 xl:w-12" />
	</div>

	<Swiper
		modules={[Navigation]}
		slidesPerView={1}
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
		@apply relative min-h-[370px] rounded-[10px] py-8;
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
