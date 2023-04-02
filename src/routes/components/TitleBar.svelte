<script lang="ts">
	export let text: string;
</script>

<div class="title-bar">
	
	<img src={'https://win98icons.alexmeub.com/icons/png/user_computer-1.png'} alt={'user_computer-1.png'} style="height:1rem" />
	<div class="title-bar-text" style="font-size: medium;margin-right: 23rem;">{text}</div>
	<div class="title-bar-controls">
		<button aria-label="Minimize" />
		<button aria-label="Maximize" />
		<button aria-label="Close" />
	</div>
</div>
