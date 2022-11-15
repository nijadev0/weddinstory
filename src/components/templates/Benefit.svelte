<script lang="ts">
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { FreeMode, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

	import 'swiper/css';
	import 'swiper/css/free-mode';
	import 'swiper/css/navigation';

	import Title from '../moleculs/Title.svelte';
</script>

<section class="benefit">
	<Title
		variant="terniary"
		heading="Lebih dari 100+ Tema Eksklusif"
		description="Pilih berbagai tema eksklusif dari kami untuk undanganmu"
		benefit
	/>

	<Swiper freeMode={true} slidesPerView="auto" spaceBetween={20} modules={[FreeMode]}>
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
</section>

<style lang="postcss">
	.benefit {
		@apply flex max-w-screen-2xl flex-col items-center py-12 xl:mt-11;
	}
</style>
