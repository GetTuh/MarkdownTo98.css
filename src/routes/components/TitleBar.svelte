<script lang="ts">
	export let text: string;
</script>

<div class="title-bar">
	<div class="title-bar-text" style="font-size: medium;">{text}</div>
	<div class="title-bar-controls">
		<button aria-label="Minimize" />
		<button aria-label="Maximize" />
		<button aria-label="Close" />
	</div>
</div>
