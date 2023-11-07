<script lang="ts">
	import TitleBar from './components/TitleBar.svelte';
	import TextSegment from './components/TextSegment.svelte';
	import CenterBigText from './components/CenterBigText.svelte';
	import TextBox from './components/TextBox.svelte';
	import BottomWindowSegment from './components/BottomWindowSegment.svelte';
	import Toolbar from './components/Toolbar.svelte';
	let htmlAll = '';
	// export let noteText: string;
	const headerRegex = new RegExp(/(#+ )(.*)/);
	const regexBold = new RegExp(/(\*\*|__)(.*?)\1/g);
	const regexItalic = /\_(\S(.*?\S)?)\_/gm;
	const regexImage = /!\[([^\[]+)\]\(([^\)]+)\)/g;
	const isHeader = (line: string) => headerRegex.test(line);
	const isBox = (line: string) => line.startsWith('>');
	let title: string;
	let date:string
	export const convertToHtml = (text='', faunaTitle: string,faunaDate:string) => {
		let html = text.split('\n');
		title = faunaTitle;
		date = faunaDate
		console.log(`date: ${date}`)
		for (let x = 0; x < html.length; x++) {
			if (html[x]) {
				html = html.filter((item) => item);
				html[x] = html[x]
					.replaceAll(regexBold, '<b>$2</b>')
					.replaceAll(regexItalic, '<i>$1</i>')
					.replaceAll(
						regexImage,
						'</br><fieldset style="background-color:#dfdfdf;padding:unset"><img src=\'$2\' style="display:block;margin:auto;max-width:100%"><p style="    text-align: center;">$1</p></fieldset>'
					);
			}
		}
		htmlAll = html;
	};
</script>

<div style="margin-left:0.5rem;margin-right:0.5rem;margin-top:0.2rem">
	<div class="window" style="width: auto; margin: auto; max-width: 40rem">
		<TitleBar text={title} />
		<fieldset class='toolbar'>
			<Toolbar date={date}/>
		</fieldset>
		<fieldset class="inner">
			{#each htmlAll as line}
				{#if isHeader(line)}
					<CenterBigText text={line.substring(3)} icon="accessibility_two_windows" />
				{:else if isBox(line)}
					<TextBox text={line.substring(1)} />
				{:else if line == '* * *' || line == '***'}
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
	.toolbar{
		margin:0%;
		padding:0%;
		margin-top:0.1%;
	}
</style>
