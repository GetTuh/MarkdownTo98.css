<script lang="ts">
	export let alt: string;
	export let src: string;
</script>

<br />
<div class="window" style="width: fit-content; margin: auto;">
	<div class="title-bar">
		<div class="title-bar-text">{alt}</div>
		<div class="title-bar-controls">
			<button aria-label="Minimize"></button>
			<button aria-label="Maximize"></button>
			<button aria-label="Close"></button>
		</div>
	</div>
	<fieldset style="background-color: #dfdfdf; padding: unset;">
		<img {src} {alt} style="display: block; margin: auto; max-width: 100%;" />
	</fieldset>
</div>
