<script lang="ts">
	import '../app.css';
	import Header from '../components/organisms/Header.svelte';
	import Footer from '../components/organisms/Footer.svelte';

	import type { PageData } from './$types';
	import Whatsapp from '$lib/icons/Whatsapp.svelte';

	export let data: PageData;
</script>

<Header />

<div class="contact-now">
	<Whatsapp class="h-full max-h-8 w-full max-w-[2rem]" />
</div>

<main class="main">
	<slot />
</main>

<Footer data={data.footer} />

<style lang="postcss">
	.main {
		@apply container relative mx-auto max-w-screen-sm;
	}

	.contact-now {
		@apply fixed bottom-12 right-5 z-20 h-max w-max rounded-full bg-white p-2.5 shadow-iconWhatsapp;
	}
</style>
