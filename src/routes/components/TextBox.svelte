<script lang="ts">
	import { onMount } from 'svelte';
	export let text: string;

	let displayText = text.split(' ').slice(1).join(' ');
	let el: HTMLTextAreaElement;

	onMount(() => {
		el.style.height = '0';
		el.style.height = el.scrollHeight + 'px';
	});
</script>

<textarea
	readonly
	bind:this={el}
	style="width:-webkit-fill-available;width:-moz-available;padding:.5rem;margin:1rem;resize:none;overflow:hidden;"
>{displayText}</textarea>

<style>
	textarea {
		font-size: small;
	}
	@media (max-width: 768px) {
		textarea {
			font-size: 1rem;
		}
	}
</style>
