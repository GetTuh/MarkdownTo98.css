<script context="module" lang="ts">
	const testJson = {
		name: 'some note from faunadb',
		date: '01/01/2022',
		readme: 'readme'
	};
	const headerRegex = new RegExp(/(#+ )(.*)/);
	let regexBold = new RegExp(/(\*\*|__)(.*?)\1/g);
	let regexItalic = /\_(\S(.*?\S)?)\_/gm;
	const isHeader = (line: string) => headerRegex.test(line);
	const isBox = (line: string) => line.startsWith('>');
	// const makeBold = (line:string) =>
	export const convertToHtml = (text: string) => {
		// text = text.replaceAll(regexBold, '<b>$2</b>')
		let html = text.split('\n');
		for (let x = 0; x < html.length; x++) {
			html = html.filter((item) => (item ? true : false));
			html[x] = html[x].replaceAll(regexBold, '<b>$2</b>').replaceAll(regexItalic, '<i>$1</i>');
		}
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
		<fieldset>
			{#each htmlAll as line}
				{#if isHeader(line)}
					<CenterBigText text={line.substring(3)} icon="accessibility_two_windows" />
				{:else if isBox(line)}
					<TextBox text={line.substring(1)} />
				{:else if line == '* * *' || line == '***'}
					<!-- <BottomWindowSegment textArray={['...']} /> -->
				{:else}
					<TextSegment text={line} />
				{/if}
			{/each}
		</fieldset>
	</div>
</div>

<style>
	fieldset {
		margin: 1rem;
	}
</style>
