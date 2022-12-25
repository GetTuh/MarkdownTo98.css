<script lang="ts">
	import TitleBar from './components/TitleBar.svelte';
	import TextSegment from './components/TextSegment.svelte';
	import CenterBigText from './components/CenterBigText.svelte';
  import TextBox from './components/TextBox.svelte';
</script>

<div>
	<div class="window" style="width: auto;margin:.5rem;max-width:40rem">
		<TitleBar text="yo this is a text" />

		<fieldset>
			<TextSegment text="this is a text too" />
		</fieldset>
		<CenterBigText text="big center text yo" />
		<fieldset>
			<TextSegment
				text="<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque odit ex minus vero</p><p>nihil numquam culpa, similique, error ducimus labore praesentium recusandae ipsum, cumeligendi! Odio inventore a hic voluptatum.</p>"
			/>
      <TextBox text='something in the textbox.' />
		</fieldset>
	</div>
</div>

<style>
	fieldset {
		margin: 1rem;
	}
</style>
