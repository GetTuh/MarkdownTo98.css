<script>
	import Convert from './convert.svelte';
</script>

<!-- FIELDSETS: logic. start for textbox if not already   -->
<!-- <div>
	<div class="window" style="width: auto;margin:.5rem;max-width:40rem">
		<TitleBar text="yo this is a text" />

		<fieldset>
			<TextSegment text="this is a text too" />
		</fieldset>
		<CenterBigText text="This text is no longer center" />

		<fieldset>
			<TextSegment
				text="<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque odit ex minus vero</p><p>nihil numquam culpa, similique, error ducimus labore praesentium recusandae ipsum, cumeligendi! Odio inventore a hic voluptatum.</p>"
			/>
      <TextBox text='something in the textbox.' />
		</fieldset>
    <BottomWindowSegment textArray={['a','b','c','dsa']} />
	</div>
  
</div> -->
<Convert />

<style>
	fieldset {
		margin: 1rem;
	}
</style>
