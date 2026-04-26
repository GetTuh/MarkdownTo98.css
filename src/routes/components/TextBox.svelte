<script lang="ts">
	import { onMount } from 'svelte';
	export let text: string;

	text = text.split(' ').slice(1).join(' ');

	let el: HTMLTextAreaElement;

	onMount(() => {
		el.style.height = '0';
		el.style.height = el.scrollHeight + 'px';
	});
</script>

<textarea readonly bind:this={el} style="font-size:small;width:-webkit-fill-available;width:-moz-available;padding:.5rem;margin:1rem;resize:none;overflow:hidden;">{text}</textarea>
