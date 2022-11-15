<script lang="ts">
	export let variant: string | 'primary' | 'outline' = 'primary';
	export let type: string | 'link' | 'button' = 'link';
	export let href: string = '';
	export let icon: boolean = false;

	let className: string = '';
	export { className as class };
</script>

{#if type === 'button'}
	<button class="btn {variant} {className}">
		<slot />
	</button>
{:else}
	<a {href} class="btn {icon && 'icon'} {variant} {className}">
		<slot />
	</a>
{/if}

<style lang="postcss">
	.btn {
		@apply rounded-full py-[15px] text-center text-sm font-medium xl:py-5 xl:text-xl;
	}

	.btn.primary {
		@apply border border-transparent bg-primary text-white transition-all duration-500 ease-in-out hover:border hover:border-primary hover:bg-white hover:text-primary;
	}

	.btn.secondary {
		@apply border border-primary bg-transparent text-primary transition-all duration-500 ease-in-out hover:border hover:border-transparent hover:bg-primary hover:text-white;
	}

	.btn.icon {
		@apply flex flex-row items-center gap-2 py-2;
	}
</style>
