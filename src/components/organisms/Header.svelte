<script lang="ts">
	import { slide } from 'svelte/transition';

	import WeddinLogo from '../../lib/brands/WeddinLogo.svelte';
	import Menu from '../../lib/icons/Menu.svelte';
	import Close from '../../lib/icons/Close.svelte';

	let menuShow: boolean = false;

	let menuLabel = ['Beranda', 'Fitur', 'Katalog', 'Kontak'];
</script>

<header class="px-5 container w-full flex items-center justify-between pt-12 pb-5 relative">
	<a href="/">
		<WeddinLogo />
	</a>

	<nav>
		<button on:click={() => (menuShow = !menuShow)}>
			<Menu />
		</button>
	</nav>
	{#if menuShow}
		<div transition:slide={{ duration: 1000 }} class="w-full fixed h-screen inset-0 z-10">
			<header class="px-5 container w-full flex items-center justify-between pt-12 pb-5 relative bg-white">
				<a href="/">
					<WeddinLogo />
				</a>
			
				<nav>
					<button on:click={() => (menuShow = !menuShow)}>
						<Close />
					</button>
				</nav>
			</header>
			<ul class="bg-white w-full px-5">
				{#each menuLabel as label}
					<li class="pt-6 pb-5 border-b border-black/5">
						<a class="text-[#121212]/60 text-lg" href="/{label.toLowerCase()}">{label}</a>
					</li>
				{/each}
			</ul>
			<div class="w-full bg-[#121212]/20 h-full" />
		</div>
	{/if}
</header>
