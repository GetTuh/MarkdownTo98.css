<script context="module" lang="ts">
	const testJson = {
		name: 'some note from faunadb',
		date: '01/01/2022',
		readme:
			'test.'
	};
	const headerRegex = new RegExp(/(#+ )(.*)/);
	let regexBold = new RegExp(/(\*\*|__)(.*?)\1/g);
	let regexItalic = /\_(\S(.*?\S)?)\_/gm;
	const isHeader = (line: string) => headerRegex.test(line);
	const isBox = (line: string) => line.startsWith('>')
	// const makeBold = (line:string) =>
	export const convertToHtml = (text: string) => {
		// text = text.replaceAll(regexBold, '<b>$2</b>')
		let html = text.split('\n');
		for(let x=0; x<html.length;x++){
			html[x]=html[x].replaceAll(regexBold, '<b>$2</b>').replaceAll(regexItalic, '<i>$1</i>')

			
		}
		console.log(html)
		return html;
	};
	const htmlAll = convertToHtml(testJson.readme);
</script>

<script lang="ts">
	import TitleBar from './components/TitleBar.svelte';
	import TextSegment from './components/TextSegment.svelte';
	import CenterBigText from './components/CenterBigText.svelte';
	import TextBox from './components/TextBox.svelte';
	import BottomWindowSegment from './components/BottomWindowSegment.svelte';
</script>

<div>
	<div class="window" style="width: auto;margin:.5rem;max-width:40rem">
		<TitleBar text={testJson.name} />
		{#each htmlAll as line}
			{#if isHeader(line)}
				<CenterBigText text={line} icon='accessibility_two_windows' />
			{:else if isBox(line)}
				<TextBox text={line} />
			{:else}
				<TextSegment text={line} />
			{/if}
		{/each}
	</div>
</div>
