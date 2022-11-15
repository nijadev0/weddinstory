<script lang="ts">
	import Heading from '../../components/atoms/Heading.svelte';
	import WeddinLogo from '../../lib/brands/WeddinLogo.svelte';
	import Button from '../atoms/Button.svelte';
	import Para from '../atoms/Para.svelte';

	import Mail from '$lib/icons/Mail.svelte';
	import Circle from '$lib/icons/Circle.svelte';

	export let data: any;
</script>

<footer class="footer">
	<Circle
		class="absolute -top-[28rem] -right-[12rem] z-10 h-[676px] w-[681px] stroke-white/30 xl:h-[676px] xl:w-[681px]"
		footer
	/>

	<Circle
		class="absolute -bottom-[20rem] -right-[8rem] z-10 h-[449px] w-[446px] stroke-white/30 xl:h-[676px] xl:w-[681px]"
		footer
	/>

	<Circle
		class="absolute -bottom-[24rem] -left-[24rem] z-10 h-[676px] w-[681px] stroke-white/30 xl:h-[676px] xl:w-[681px]"
		footer
	/>
	<div class="wrapper">
		<div class="heading">
			<Heading variant="secondary" size="base" color="white" class="max-w-[872px] leading-[1.47]">
				Buat undanganmu sekarang dengan paket terbaik dari kami!
			</Heading>
		</div>
		<div class="list">
			<div class="flex flex-col items-start gap-10 xl:grid xl:grid-cols-12 xl:gap-[30px]">
				<div class="col-span-5 flex w-full flex-col items-start gap-5 xl:gap-14">
					<WeddinLogo variant="secondary" class="h-[24px] w-[102px] xl:h-[52px] xl:w-[225px]" />

					<Button type="link" icon href="mailto:hello@weddinstory.com">
						<Mail />
						<span class="btn icon span">hello@weddinstory.com</span>
					</Button>

					<Para variant="terniary" class="max-w-[290px]">
						Jl. Sorogenen No.35, Sorosutan, Umbulharjo, Kota Yogyakarta 55162
					</Para>
				</div>

				{#each data as { heading, menu }, index}
					<div class="flex flex-col items-start pt-6 {index === 0 ? 'col-span-3' : 'col-span-4'}">
						<h5 class="mb-5 text-xl font-medium">{heading}</h5>
						{#each menu as { label, href }}
							<a class="mb-4 text-base font-normal" {href}>{label}</a>
						{/each}
					</div>
				{/each}
			</div>
		</div>
		<Para variant="terniary" size="small" class="py-6 text-center opacity-70 xl:py-8">
			&copy; 2021 WeddinStory. All rights reserved
		</Para>
	</div>
</footer>

<style lang="postcss">
	.footer {
		@apply relative w-full bg-primary px-5 text-white;
	}

	.footer .wrapper {
		@apply container relative max-w-screen-xl;
	}

	.heading {
		@apply border-b border-b-white/25 pt-[50px] pb-[42px] xl:pt-[92px] xl:pb-12;
	}

	.list {
		@apply border-b border-b-white/25 pt-[42px] pb-[46px] xl:pt-[55px] xl:pb-[60px];
	}

	.btn.icon.span {
		@apply text-xl;
	}
</style>
