<script lang="ts">
	export let text: string;
	function get_random(list: Array<string>) {
		return list[Math.floor(Math.random() * list.length)];
	}
	const iconsToChooseFrom = [
		'world-2',
		'windows-5',
		'winrep_mag_glass',
		'themes-4',
		'spider-0',
		'soundyel-2',
		'shut_down_normal-2',
		'search_file-1',
		'search_directory-2',
		'recycle_bin_full-3',
		'paint_file-4',
		'overlay_share_cool-3',
		'outlook_express-1',
		'mouse_trails',
		'movie_maker-1',
		'microphone-0',
		'help_book_small-5',
		'document-0',
		'cd_drive-0',
		'accessibility_two_windows'
	];
	const icon = `icons/${get_random(iconsToChooseFrom)}.png`;
</script>

<div class="status-bar">
	<div class="status-bar-field">
		<img src={icon} alt="{icon}" style="height:2rem" />
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
