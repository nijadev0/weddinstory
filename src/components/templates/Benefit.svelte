<script lang="ts">
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import 'swiper/css';

	import Button from '../atoms/Button.svelte';
	import Heading from '../atoms/Heading.svelte';
	import Para from '../atoms/Para.svelte';

	import ArrowBtn from '$lib/icons/ArrowBtn.svelte';
	import Title from '../moleculs/Title.svelte';
</script>

<section class="benefit flex flex-col items-center py-12">
	<Title
		variant="terniary"
		heading="Lebih dari 100+ Tema Eksklusif"
		description="Pilih berbagai tema eksklusif dari kami untuk undanganmu"
	/>

	<Swiper slidesPerView={2} spaceBetween={20}>
		<SwiperSlide class="max-h-[280px] max-w-[246px]">
			<img
				class="h-full w-full object-cover"
				src="theme-illustration-1.png"
				alt="Collection Theme Illustration"
			/>
		</SwiperSlide>

		<SwiperSlide class="max-h-[280px] max-w-[246px]">
			<img
				class="h-full w-full object-cover"
				src="theme-illustration-3.png"
				alt="Collection Theme Illustration"
			/>
		</SwiperSlide>

		<SwiperSlide class="max-h-[280px] max-w-[246px]">
			<img
				class="h-full w-full object-cover"
				src="theme-illustration-2.png"
				alt="Collection Theme Illustration"
			/>
		</SwiperSlide>
	</Swiper>
</section>
