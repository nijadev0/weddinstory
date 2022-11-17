<script lang="ts">
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { FreeMode, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

	import 'swiper/css';
	import 'swiper/css/free-mode';
	import 'swiper/css/navigation';

	import Title from '../moleculs/Title.svelte';
	import Arrow from '$lib/icons/Arrow.svelte';

	export let isBeginning: boolean = true;
	export let isEnd: boolean = false;
</script>

<section class="benefit">
	<Title
		variant="terniary"
		heading="Lebih dari 100+ Tema Eksklusif"
		description="Pilih berbagai tema eksklusif dari kami untuk undanganmu"
		benefit
	/>

	<div class="relative">
		<div id="prev" class="icon left">
			<Arrow
				class="h-[42px] w-[42px] fill-slate-400 xl:h-12 xl:w-12 {isBeginning === true
					? 'fill-slate-400'
					: 'fill-primary'}"
			/>
		</div>

		<Swiper
			freeMode={true}
			slidesPerView="auto"
			spaceBetween={20}
			modules={[FreeMode, Navigation]}
			navigation={{
				prevEl: '#prev',
				nextEl: '#next'
			}}
			on:slideChange={(e) => {
				(isEnd = e.detail[0].isEnd), (isBeginning = e.detail[0].isBeginning);
			}}
			grabCursor
		>
			{#each [1, 2, 3, 4, 5, 6] as carousel}
				<SwiperSlide class="h-full max-h-96 w-full max-w-[24rem] rounded-[15px]">
					<img
						class="rounded-[15px]"
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
