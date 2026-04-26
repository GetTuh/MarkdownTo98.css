<script lang="ts">
	import TitleBar from './components/TitleBar.svelte';
	import TextSegment from './components/TextSegment.svelte';
	import CenterBigText from './components/CenterBigText.svelte';
	import TextBox from './components/TextBox.svelte';
	import ImageWindow from './components/ImageWindow.svelte';
	import Toolbar from './components/Toolbar.svelte';
	import NoteLink from './components/NoteLink.svelte';

	export let text: string = '';
	export let title: string = '';
	export let date: string = '';
	export let notes: { encryptedKey: string; name: string; year: string }[] = [];
	export let pass: string = '';

	const headerPattern = /^(#+) (.+)/;
	const boldPattern = /(\*\*|__)(.*?)\1/g;
	const italicPattern = /_(\S(.*?\S)?)_/g;
	const imagePattern = /!\[([^\[]+)\]\(([^\)]+)\)/;

	type TextLine = { type: 'text' | 'header' | 'box' | 'hr'; html: string };
	type ImageLine = { type: 'image'; alt: string; src: string };
	type LinkEntry = { noteName: string; index: number };
	type LinkLine = { type: 'links'; entries: LinkEntry[] };
	type Line = TextLine | ImageLine | LinkLine;

	function parseLines(src: string): Line[] {
		let linkCount = 0;
		return (src || '')
			.split('\n')
			.filter(Boolean)
			.map((line): Line => {
				const imageMatch = imagePattern.exec(line);
				if (imageMatch) {
					return { type: 'image', alt: imageMatch[1], src: imageMatch[2] };
				}
				const allLinks = [...line.matchAll(/\[\[(.+?)\]\]/g)];
				if (allLinks.length > 0) {
					return {
						type: 'links',
						entries: allLinks.map((m) => ({ noteName: m[1], index: linkCount++ }))
					};
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
	}

	$: lines = parseLines(text);
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
				{:else if line.type === 'links'}
					<div class="link-row">
						{#each line.entries as entry}
							<NoteLink noteName={entry.noteName} index={entry.index} {notes} {pass} />
						{/each}
					</div>
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
	.link-row {
		display: flex;
		justify-content: space-between;
		gap: 0.5rem;
		margin: 0.5rem 1rem;
	}
</style>
