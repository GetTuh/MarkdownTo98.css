<script lang="ts">
	import TitleBar from './components/TitleBar.svelte';
	import TextSegment from './components/TextSegment.svelte';
	import CenterBigText from './components/CenterBigText.svelte';
	import TextBox from './components/TextBox.svelte';
	import BottomWindowSegment from './components/BottomWindowSegment.svelte';
	import Toolbar from './components/Toolbar.svelte';

	let htmlAll: string[] = [];
	const headerPattern = /^(#+) (.+)/;
	const boldPattern = /(\*\*|__)(.*?)\1/g;
	const italicPattern = /_(\S(.*?\S)?)_/g;
	const imagePattern = /!\[([^\[]+)\]\(([^\)]+)\)/g;

	let title: string;
	let date: string;

	export const convertToHtml = (text: string = '', faunaTitle: string, faunaDate: string) => {
		title = faunaTitle;
		date = faunaDate;
		console.log(text.match(imagePattern));
		htmlAll = text
			.split('\n')
			.filter(Boolean)
			.map((line) => {
				if (imagePattern.test(line)) {
					return line.replace(
						imagePattern,
						`
						</br>
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
</div>

		  `
					);
				} else {
					return line.replace(boldPattern, '<b>$2</b>').replace(italicPattern, '<i>$1</i>');
				}
			});
	};

	const isHeader = (line: string) => headerPattern.test(line);
	const isBox = (line: string) => line.startsWith('>');
</script>

<div style="margin: 0.2rem 0.5rem;">
	<div class="window" style="max-width: 40rem; margin: auto;">
		<TitleBar text={title} />
		<fieldset class="toolbar">
			<Toolbar {date} />
		</fieldset>
		<fieldset class="inner">
			{#each htmlAll as line}
				{#if isHeader(line)}
					<CenterBigText
						text={line.substring(line.indexOf(' ') + 1)}
						icon="accessibility_two_windows"
					/>
				{:else if isBox(line)}
					<TextBox text={line.substring(0).trim()} />
				{:else if line === '* * *' || line === '***'}
					<BottomWindowSegment textArray={['...']} />
				{:else}
					<TextSegment text={line} />
				{/if}
			{/each}
		</fieldset>
	</div>
</div>

<style>
	.inner {
		margin: 0.25rem;
	}
	/* 
	imagesubtitle {
		background: rgb(0, 128, 128);
		text-align: center;
		color: white;
		display: inline-block;
		padding: 0.1rem;
		padding-left: 0.4rem;
		padding-right: 0.4rem;
		padding-top: 0;
	} */
	.toolbar {
		margin: 0%;
		padding: 0%;
		margin-top: 0.1%;
	}
</style>
