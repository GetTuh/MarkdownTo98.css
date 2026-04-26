<script lang="ts">
	import Convert from './convert.svelte';

	let noteText = `# Heading
**bold text**
_italic text_
> Blockquote`;
</script>

<div class="boxi">
	<textarea bind:value={noteText}></textarea>
	<Convert text={noteText} />
</div>
<div>
	Help:
	<ul>
		<li># Heading</li>
		<li>**bold text**</li>
		<li>_italic text_</li>
		<li>&gt; blockquotes</li>
		<li>![image](https://link.com)</li>
		<li>*** or * * * for a divider</li>
	</ul>
</div>

<style>
	.boxi {
		display: flex;
		justify-content: space-around;
	}
</style>
