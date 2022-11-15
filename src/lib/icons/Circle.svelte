<script lang="ts">
	export let footer: boolean = false;

	let className: string = '';
	export { className as class };
</script>

<svg
	class={className}
	width="324"
	height="321"
	viewBox="0 0 324 321"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M323.265 160.5C323.265 248.729 251.07 320.265 162 320.265C72.9295 320.265 0.735366 248.729 0.735366 160.5C0.735366 72.2709 72.9295 0.735366 162 0.735366C251.07 0.735366 323.265 72.2709 323.265 160.5Z"
		stroke={!footer ? '#E38064' : '#FFFFFF'}
		stroke-opacity="0.3"
		stroke-width="1"
	/>
</svg>
