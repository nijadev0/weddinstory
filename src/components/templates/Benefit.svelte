<script lang="ts">
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import 'swiper/css';

	import Title from '../moleculs/Title.svelte';
</script>

<section class="benefit flex flex-col items-center py-12">
	<Title
		variant="terniary"
		heading="Lebih dari 100+ Tema Eksklusif"
		description="Pilih berbagai tema eksklusif dari kami untuk undanganmu"
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
			<SwiperSlide class="h-full w-full max-w-[240px] sm:min-w-[240px] sm:max-w-[393px]">
				<img
					src="theme-illustration-{carousel}.png"
					alt="Collection Theme Illustration {carousel}"
				/>
			</SwiperSlide>
		{/each}
	</Swiper>
</section>
