<script lang="ts">
	export let text: string;

	export let icon:string
	const iconPath = `icons/${icon}.png`;
</script>

<div class="status-bar">
	<div class="status-bar-field">
		<img src={iconPath} alt="{iconPath}" style="height:2rem" />
		<b style="margin: 1rem;">{text}</b>
	</div>
</div>

<style>
	.status-bar-field {
		font-size: large;
		margin-left: 1rem;
		margin-right: 1rem;
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
		padding: 1rem;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
</style>
