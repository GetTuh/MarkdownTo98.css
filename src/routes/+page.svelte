<script>
	// @ts-nocheck

	import Convert from './convert.svelte';
	let convertcomponent
	let noteText = `Help:
# 	 Heading 
**bold text**
_italic text_
> Blockquotes
	`;
</script>

<div class="boxi">
	<textarea bind:value={noteText} on:input={convertcomponent.convertToHtml(noteText)} />
	<Convert bind:this={convertcomponent}/>
</div>
<div>
	Help:
	<ul># Heading</ul>
	<ul>**bold text**</ul>
	<ul>_italic text_</ul>
	<ul>>blockquotes</ul>
	<ul>![image](https://link.com)</ul>
</div>

<style>
	.boxi {
		display: flex;
		justify-content: space-around;
	}
</style>
