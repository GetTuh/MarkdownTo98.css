<script>
	// @ts-nocheck

	import Convert from './convert.svelte';
	let noteText = `Help:
# 	 Heading 
**bold text**
_italic text_
> Blockquotes
	`;
</script>

<div class="boxi">
	<textarea bind:value={noteText} />
	<Convert {noteText} />
</div>
<div>
	Help:
	<ul># Heading</ul>
	<ul>**bold text**</ul>
	<ul>_italic text_</ul>
	<ul>>blockquotes</ul>
</div>

<style>
	.boxi {
		display: flex;
		justify-content: space-around;
	}
</style>
