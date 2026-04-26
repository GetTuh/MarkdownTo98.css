<script lang="ts">
	import TitleBar from './components/TitleBar.svelte';
	import TextSegment from './components/TextSegment.svelte';
	import CenterBigText from './components/CenterBigText.svelte';
	import TextBox from './components/TextBox.svelte';
	import ImageWindow from './components/ImageWindow.svelte';
	import Toolbar from './components/Toolbar.svelte';

	export let text: string = '';
	export let title: string = '';
	export let date: string = '';

	const headerPattern = /^(#+) (.+)/;
	const boldPattern = /(\*\*|__)(.*?)\1/g;
	const italicPattern = /_(\S(.*?\S)?)_/g;
	const imagePattern = /!\[([^\[]+)\]\(([^\)]+)\)/;

	type TextLine = { type: 'text' | 'header' | 'box' | 'hr'; html: string };
	type ImageLine = { type: 'image'; alt: string; src: string };
	type Line = TextLine | ImageLine;

	$: lines = (text || '')
		.split('\n')
		.filter(Boolean)
		.map((line): Line => {
			const imageMatch = imagePattern.exec(line);
			if (imageMatch) {
				return { type: 'image', alt: imageMatch[1], src: imageMatch[2] };
			}
			if (headerPattern.test(line)) {
				return { type: 'header', html: line };
			}
			if (line.startsWith('>')) {
				return { type: 'box', html: line };
			}
			if (line === '***' || line === '* * *') {
				return { type: 'hr', html: line };
			}
			boldPattern.lastIndex = 0;
			italicPattern.lastIndex = 0;
			return {
				type: 'text',
				html: line.replace(boldPattern, '<b>$2</b>').replace(italicPattern, '<i>$1</i>')
			};
		});
</script>

<div style="margin: 0.2rem 0.5rem;">
	<div class="window" style="width: min(60rem, 92vw); margin: auto;">
		<TitleBar text={title} />
		<fieldset class="toolbar">
			<Toolbar {date} />
		</fieldset>
		<fieldset class="inner">
			{#each lines as line}
				{#if line.type === 'image'}
					<ImageWindow alt={line.alt} src={line.src} />
				{:else if line.type === 'header'}
					<CenterBigText
						text={line.html.substring(line.html.indexOf(' ') + 1)}
						icon="accessibility_two_windows"
					/>
				{:else if line.type === 'box'}
					<TextBox text={line.html.trim()} />
				{:else if line.type === 'hr'}
					<hr />
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
	hr {
		margin-top: 2rem;
		margin-bottom: 2rem;
		color: black;
	}
</style>
