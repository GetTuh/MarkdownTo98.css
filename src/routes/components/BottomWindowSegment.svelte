<script lang="ts">
	export let textArray: Array<string>;
</script>

<div class="status-bar" style="font-size: small; margin:.1rem">
	{#each textArray as text}
		<p class="status-bar-field">{text}</p>
	{/each}
</div>
