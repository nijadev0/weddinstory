<script lang="ts">
	import Button from '../../components/atoms/Button.svelte';
	import Title from '../moleculs/Title.svelte';

	import HeroPhoto from '../../lib/images/hero-photo.png';
	import Circle from '$lib/icons/Circle.svelte';
</script>

<!-- Hero -->
<section class="hero">
	<Circle class="absolute -top-[40%] -left-40" />
	<div class="text">
		<Title
			heading="Sebarkan kabar bahagiamu dalam satu genggaman"
			description="Dengan E-Invitation lebih mudah mengundang siapapun dimanapun dengan 3 ketukan"
		/>
		<Button type="button" class="w-full">Buat Undangan</Button>
	</div>

	<div class="photo">
		<img class="image" src={HeroPhoto} alt="Bikin Undangan Mantap" />
	</div>
</section>

<style lang="postcss">
	.hero {
		@apply relative py-5;
	}

	.text {
		@apply mb-12;
	}

	.photo {
		@apply min-h-[360px] w-full rounded-[10px];
	}
</style>
