<script lang="ts">
	import { slide } from 'svelte/transition';
	import { fly } from 'svelte/transition';

	import WeddinLogo from '../../lib/brands/WeddinLogo.svelte';
	import Menu from '../../lib/icons/Menu.svelte';
	import Close from '../../lib/icons/Close.svelte';

	let menuShow: boolean = false;

	let menuLabel = ['Beranda', 'Fitur', 'Katalog', 'Kontak'];
</script>

<header class="header">
	<a class="logo" href="/">
		<WeddinLogo class="h-8 w-32" />
	</a>

	<nav class="burger">
		<button on:click={() => (menuShow = !menuShow)}>
			<Menu />
		</button>
	</nav>

	<nav class="desktop-menu hidden xl:block">
		<ul class="desktop-list flex items-center gap-9 text-sm text-[#121212]/60 xl:text-base">
			{#each menuLabel as label}
				<li class="desktop-item">
					<a href="/" class="desktop-link"> {label} </a>
				</li>
			{/each}
		</ul>
	</nav>

	{#if menuShow}
		<div transition:slide={{ duration: 1000 }} class="burger-wrapper">
			<header class="burger-header">
				<a href="/">
					<WeddinLogo />
				</a>

				<nav class="burger">
					<button on:click={() => (menuShow = !menuShow)}>
						<Close />
					</button>
				</nav>
			</header>
			<ul class="burger-list">
				{#each menuLabel as label}
					<li class="burger-item">
						<a class="burger-link" href="/{label.toLowerCase()}">{label}</a>
					</li>
				{/each}
			</ul>
			<div class="burger-overlay" />
		</div>
	{/if}
</header>

<style lang="postcss">
	.header {
		@apply container relative mx-auto flex w-full max-w-screen-xl items-center justify-between px-5 pt-12 pb-5 xl:py-12;
	}

	.burger {
		@apply block xl:hidden;
	}

	.burger-header {
		@apply container relative flex w-full items-center justify-between bg-white px-5 pt-12 pb-5;
	}

	.burger-wrapper {
		@apply fixed inset-0 z-10 h-screen w-full;
	}

	.burger-list {
		@apply w-full bg-white px-5;
	}

	.burger-item {
		@apply border-b border-black/5 pt-6 pb-5;
	}

	.burger-link {
		@apply text-lg text-[#121212]/60;
	}

	.burger-overlay {
		@apply h-full w-full bg-[#121212]/20;
	}
</style>
