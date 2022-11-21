<script lang="ts">
	import { onMount } from 'svelte';
	import { animate, stagger, inView } from 'motion';

	import Heading from '$components/atoms/Heading.svelte';
	import Para from '$components/atoms/Para.svelte';

	import WeddinLogo from '$lib/brands/WeddinLogo.svelte';
	import Mail from '$lib/icons/Mail.svelte';
	import Circle from '$lib/icons/Circle.svelte';

	export let data: any;

	onMount(() => {
		inView('#footer', ({ target }) => {
			animate(
				target.querySelectorAll('#footerItem'),
				{ opacity: [0, 1], y: [40, 0] },
				{ duration: 0.75, delay: stagger(0.25, { start: 0.5 }), offset: [0, 1] }
			);
		});
	});
</script>

<footer id="footer" class="footer">
	<Circle
		class="absolute -top-[28rem] -right-[30rem] z-10 h-[676px] w-[681px] stroke-white/30 xl:-top-[28rem] xl:-right-[12rem] xl:h-[676px] xl:w-[681px]"
		footer
	/>

	<Circle
		class="absolute -bottom-20 -right-96 z-10 h-[449px] w-[446px] stroke-white/30 xl:-bottom-[20rem] xl:-right-[8rem] xl:h-[676px] xl:w-[681px]"
		footer
	/>

	<Circle
		class="absolute -bottom-96 -left-[36rem] z-10 h-[676px] w-[681px] stroke-white/30 xl:-bottom-[24rem] xl:-left-[24rem] xl:h-[676px] xl:w-[681px]"
		footer
	/>

	<div class="wrapper">
		<div id="footerItem" class="heading">
			<Heading variant="secondary" size="base" color="white" class="max-w-[872px] leading-[1.47]">
				Buat undanganmu sekarang dengan paket terbaik dari kami!
			</Heading>
		</div>
		<div id="footerItem" class="list">
			<div class="listWrapper">
				<div class="listBrand">
					<WeddinLogo variant="secondary" class="h-[24px] w-[102px] xl:h-[52px] xl:w-[225px]" />

					<a class="listBrand-mail" href="mailto:hello@weddinstory.com">
						<Mail />
						<span class="btn icon span">hello@weddinstory.com</span>
					</a>

					<Para variant="terniary" class="max-w-[290px]">
						Jl. Sorogenen No.35, Sorosutan, Umbulharjo, Kota Yogyakarta 55162
					</Para>
				</div>

				{#each data as { heading, menu }, index}
					<div class="listMenu {index === 0 ? 'col-span-3' : 'col-span-4'}">
						<h5 class="listMenu-heading">{heading}</h5>
						{#each menu as { label, href }}
							<a class="listMenu-link" {href}>{label}</a>
						{/each}
					</div>
				{/each}
			</div>
		</div>

		<Para
			id="footerItem"
			variant="terniary"
			size="small"
			class="py-6 text-center opacity-70 xl:py-8"
		>
			&copy; 2021 WeddinStory. All rights reserved
		</Para>
	</div>
</footer>

<style lang="postcss">
	.footer {
		@apply relative w-full bg-primary text-white;
	}

	.footer .wrapper {
		@apply container relative max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl;
	}

	.heading {
		@apply border-b border-b-white/25 pt-[50px] pb-[42px] xl:pt-[92px] xl:pb-12;
	}

	.list {
		@apply border-b border-b-white/25 pt-[42px] pb-[46px] xl:pt-[55px] xl:pb-[60px];
	}

	.listWrapper {
		@apply flex flex-col items-start gap-10 xl:grid xl:grid-cols-12 xl:gap-[30px];
	}

	.listBrand {
		@apply col-span-5 flex w-full flex-col items-start gap-5 xl:gap-14;
	}

	.listMenu {
		@apply flex flex-col items-start pt-6;
	}

	.listMenu-link {
		@apply mb-4 text-base font-normal;
	}

	.listMenu-heading {
		@apply mb-5 text-xl font-medium;
	}

	.listBrand-mail {
		@apply flex items-center gap-2;
	}

	.btn.icon.span {
		@apply text-xl;
	}
</style>
