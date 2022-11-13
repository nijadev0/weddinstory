<script lang="ts">
	import Heading from '../../components/atoms/Heading.svelte';
	import WeddinLogo from '../../lib/brands/WeddinLogo.svelte';
	import Button from '../atoms/Button.svelte';
	import Para from '../atoms/Para.svelte';

	import Mail from '$lib/icons/Mail.svelte';

	export let data: any;
</script>

<footer class="footer bg-[url('circle-footer.svg')] bg-cover bg-no-repeat">
	<div class="heading">
		<Heading variant="secondary" size="base" color="white">
			Buat undanganmu sekarang dengan paket terbaik dari kami!
		</Heading>
	</div>
	<div class="list">
		<div class="flex flex-col items-start gap-10">
			<div class="flex w-full flex-col items-start gap-5">
				<WeddinLogo variant="secondary" />

				<Button type="link" icon href="mailto:hello@weddinstory.com">
					<Mail />
					<span class="btn icon span">hello@weddinstory.com</span>
				</Button>

				<Para variant="terniary">
					Jl. Sorogenen No.35, Sorosutan, Umbulharjo, Kota Yogyakarta 55162
				</Para>
			</div>

			{#each data as { heading, menu }}
				<div class="flex flex-col items-start">
					<h5 class="mb-5 text-xl font-medium">{heading}</h5>
					{#each menu as { label, href }}
						<a class="mb-4 text-base font-normal" {href}>{label}</a>
					{/each}
				</div>
			{/each}
		</div>
	</div>
	<Para variant="terniary" size="small" class="py-6 text-center opacity-70">
		&copy; 2021 WeddinStory. All rights reserved
	</Para>
</footer>

<style lang="postcss">
	.footer {
		@apply container relative min-h-[852px] w-full bg-primary px-5 text-white;
	}

	.heading {
		@apply border-b border-b-white/25 pt-[50px] pb-[42px];
	}

	.list {
		@apply border-b border-b-white/25 pt-[42px] pb-[46px];
	}

	.btn.icon.span {
		@apply text-xl;
	}
</style>
