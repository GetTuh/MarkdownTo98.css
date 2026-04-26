<script lang="ts">
	export let noteName: string;
	export let index: number = 0;
	export let notes: { encryptedKey: string; name: string; year: string }[] = [];
	export let pass: string = '';

	$: cleanName = noteName.replace(/ \*$/, '').trim();
	$: matched = notes.find((n) => n.name === cleanName);
	$: url = matched
		? `/NoteDisplay/${matched.encryptedKey}&${matched.year}${pass ? `?pass=${pass}` : ''}`
		: null;
</script>

<button disabled={!url} on:click={() => { if (url) window.location.href = url; }}>
	{#if index === 0}
		<img src="https://win98icons.alexmeub.com/icons/png/wm-0.png" alt="prev" style="transform:scaleX(-1)" />
	{/if}
	{cleanName}
	{#if index !== 0}
		<img src="https://win98icons.alexmeub.com/icons/png/wm-0.png" alt="next" />
	{/if}
</button>

<style>
	button {
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 3px 10px;
	}
	img {
		height: 1.1rem;
	}
</style>
