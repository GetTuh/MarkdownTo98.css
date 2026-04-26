<script lang="ts">
	import Convert from './convert.svelte';

	let noteText = `# Heading
## Sub-heading
### Small heading
**bold text**
*italic text*
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
		<li>## Sub-heading</li>
		<li>### Small heading</li>
		<li>**bold text**</li>
		<li>*italic text*</li>
		<li>&gt; blockquotes</li>
		<li>![image](https://link.com)</li>
		<li>--- for a divider</li>
	</ul>
</div>

<style>
	.boxi {
		display: flex;
		justify-content: space-around;
	}
</style>
