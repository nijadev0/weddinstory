<script lang="ts">
	import '../app.css';
	import Header from '../components/organisms/Header.svelte';
	import Footer from '../components/organisms/Footer.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Header />

<main class="main">
	<slot />
</main>

<Footer data={data.footer} />

<style lang="postcss">
	.main {
		@apply container relative max-w-screen-2xl;
	}
</style>
