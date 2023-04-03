<script lang="ts">
	export let text: string;
</script>

<div class="title-bar" style="display:flex;">
	<img
		src={'https://win98icons.alexmeub.com/icons/png/user_computer-1.png'}
		alt={'user_computer-1.png'}
		style="height:1rem"
	/>
	<div class="title-bar-text">{text}</div>
	<div class="title-bar-controls">
		<button aria-label="Minimize" />
		<button aria-label="Maximize" />
		<button aria-label="Close" />
	</div>
</div>

<style>
	.title-bar-text {
		margin-left: 0.3rem;
		font-size: medium;
		align-self: flex-start;
		margin-right: auto;
	}
</style>
