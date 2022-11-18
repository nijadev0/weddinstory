<script lang="ts">
	import { slide } from 'svelte/transition';
	import { animate, stagger } from 'motion';
	import { onMount } from 'svelte';

	import WeddinLogo from '../../lib/brands/WeddinLogo.svelte';
	import Menu from '../../lib/icons/Menu.svelte';
	import Close from '../../lib/icons/Close.svelte';

	let menuShow: boolean = false;

	let menuLabel = ['Beranda', 'Fitur', 'Katalog', 'Kontak'];

	onMount(() => {
		animate(
			'#header',
			{ y: [-40, 0] },
			{
				easing: 'ease-in-out',
				duration: 0.5,
				delay: stagger(0.2)
			}
		);
	});
</script>

<header class="header">
	<a id="header" href="/" class="logo">
		<WeddinLogo class="h-8 w-32 cursor-pointer" />
	</a>

	<nav id="header" class="mobile">
		<button on:click={() => (menuShow = !menuShow)}>
			<Menu />
		</button>
	</nav>

	<nav id="header" class="desktop-menu hidden xl:block">
		<ul class="desktop-list flex items-center gap-9 text-sm text-[#121212]/60 xl:text-base">
			{#each menuLabel as label}
				<li class="desktop-item">
					<a href="/" class="desktop-link"> {label} </a>
				</li>
			{/each}
		</ul>
	</nav>

	{#if menuShow}
		<div transition:slide={{ duration: 1000 }} class="mobile-wrapper">
			<header class="mobile-header">
				<a href="/">
					<WeddinLogo class="h-8 w-32 cursor-pointer" />
				</a>

				<nav class="mobile">
					<button on:click={() => (menuShow = !menuShow)}>
						<Close />
					</button>
				</nav>
			</header>
			<ul class="mobile-list">
				{#each menuLabel as label}
					<li class="mobile-item">
						<a class="mobile-link" href="/{label.toLowerCase()}">{label}</a>
					</li>
				{/each}
			</ul>
			<div class="mobile-overlay" />
		</div>
	{/if}
</header>

<style lang="postcss">
	.header {
		@apply container relative flex w-full max-w-screen-sm items-center justify-between pt-12 pb-5 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xl:py-12 2xl:max-w-screen-2xl;
	}

	.header .logo {
		@apply cursor-pointer;
	}

	.mobile {
		@apply block xl:hidden;
	}

	.mobile-header {
		@apply container relative flex w-full items-center justify-between bg-white pt-12 pb-5;
	}

	.mobile-wrapper {
		@apply fixed inset-0 z-50 h-screen w-full;
	}

	.mobile-list {
		@apply w-full bg-white px-5;
	}

	.mobile-item {
		@apply container border-b border-black/5 pt-6 pb-5;
	}

	.mobile-link {
		@apply text-lg text-[#121212]/60;
	}

	.mobile-overlay {
		@apply h-full w-full bg-[#121212]/20;
	}

	.desktop-item {
		@apply relative;
	}

	.desktop-link {
		@apply before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:bg-white before:transition-colors before:duration-700 before:ease-in-out hover:before:bg-primary;
	}
</style>
