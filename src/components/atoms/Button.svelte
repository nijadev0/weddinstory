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
	<a class="btn {icon && 'icon'} {className}" {href}>
		<slot />
	</a>
{/if}

<style lang="postcss">
	.btn {
		@apply rounded-full py-[15px] text-center text-sm font-medium;
	}

	.btn.primary {
		@apply bg-primary text-white;
	}

	.btn.secondary {
		@apply border border-primary bg-transparent text-primary;
	}

	.btn.icon {
		@apply flex flex-row items-center gap-2 py-2;
	}
</style>
