<script lang="ts">
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import 'swiper/css';

	import Title from '../moleculs/Title.svelte';
	import { append } from 'svelte/internal';
</script>

<section class="benefit">
	<Title
		variant="terniary"
		heading="Lebih dari 100+ Tema Eksklusif"
		description="Pilih berbagai tema eksklusif dari kami untuk undanganmu"
		benefit
	/>

	<Swiper
		slidesPerView={2}
		spaceBetween={20}
		breakpoints={{
			1280: {
				slidesPerView: 3,
				spaceBetween: 30
			}
		}}
	>
		{#each [1, 2, 3] as carousel}
			<div class="swiper-slide">
				<SwiperSlide>
					<img
						src="theme-illustration-{carousel}.png"
						alt="Collection Theme Illustration {carousel}"
					/>
				</SwiperSlide>
			</div>
		{/each}
	</Swiper>
</section>

<style lang="postcss">
	.benefit {
		@apply flex flex-col items-center py-12 xl:mt-11;
	}

	.swiper-slide {
		@apply h-full w-full max-w-[240px] pr-5 sm:min-w-[240px] sm:max-w-[393px] xl:pr-0;
	}
</style>
