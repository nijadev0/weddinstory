<script lang="ts">
	import '../app.css';
	import type { PageData } from './$types';

	import Header from '$components/organisms/Header.svelte';
	import Footer from '$components/organisms/Footer.svelte';

	export let data: PageData;
</script>

<Header data={data.header} />

<main class="main">
	<slot />
</main>

<Footer data={data.footer} />

<style lang="postcss">
	.main {
		@apply container relative max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl;
	}
</style>
