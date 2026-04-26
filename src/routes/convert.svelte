<script lang="ts">
	import TitleBar from './components/TitleBar.svelte';
	import TextSegment from './components/TextSegment.svelte';
	import CenterBigText from './components/CenterBigText.svelte';
	import TextBox from './components/TextBox.svelte';
	import BottomWindowSegment from './components/BottomWindowSegment.svelte';
	import Toolbar from './components/Toolbar.svelte';

	export let text: string = '';
	export let title: string = '';
	export let date: string = '';

	const headerPattern = /^(#+) (.+)/;
	const boldPattern = /(\*\*|__)(.*?)\1/g;
	const italicPattern = /_(\S(.*?\S)?)_/g;
	const imagePattern = /!\[([^\[]+)\]\(([^\)]+)\)/g;

	type Line = { html: string; isImage: boolean };

	$: lines = (text || '')
		.split('\n')
		.filter(Boolean)
		.map((line): Line => {
			imagePattern.lastIndex = 0;
			if (imagePattern.test(line)) {
				imagePattern.lastIndex = 0;
				return {
					html: line.replace(
						imagePattern,
						`</br>
<div class="window" style="width: fit-content;margin:auto">
  <div class="title-bar">
    <div class="title-bar-text">$1</div>
    <div class="title-bar-controls">
      <button aria-label="Minimize"></button>
      <button aria-label="Maximize"></button>
      <button aria-label="Close"></button>
    </div>
  </div>
  <fieldset style="background-color:#dfdfdf; padding:unset;">
    <img src='$2' style="display:block; margin:auto; max-width:100%;">
  </fieldset>
</div>`
					),
					isImage: true
				};
			}
			boldPattern.lastIndex = 0;
			italicPattern.lastIndex = 0;
			return {
				html: line.replace(boldPattern, '<b>$2</b>').replace(italicPattern, '<i>$1</i>'),
				isImage: false
			};
		});

	const isHeader = (line: string) => headerPattern.test(line);
	const isBox = (line: string) => line.startsWith('>');
</script>

<div style="margin: 0.2rem 0.5rem;">
	<div class="window" style="width: min(60rem, 92vw); margin: auto;">
		<TitleBar text={title} />
		<fieldset class="toolbar">
			<Toolbar {date} />
		</fieldset>
		<fieldset class="inner">
			{#each lines as line}
				{#if line.isImage}
					{@html line.html}
				{:else if isHeader(line.html)}
					<CenterBigText
						text={line.html.substring(line.html.indexOf(' ') + 1)}
						icon="accessibility_two_windows"
					/>
				{:else if isBox(line.html)}
					<TextBox text={line.html.substring(0).trim()} />
				{:else if line.html === '* * *' || line.html === '***'}
					<BottomWindowSegment textArray={['...']} />
				{:else}
					<TextSegment text={line.html} />
				{/if}
			{/each}
		</fieldset>
	</div>
</div>

<style>
	.inner {
		margin: 0.25rem;
	}
	.toolbar {
		margin: 0%;
		padding: 0%;
		margin-top: 0.1%;
	}
</style>
