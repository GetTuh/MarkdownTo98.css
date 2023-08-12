<script lang="ts">
	export let date: string;
</script>

<div class="toolbar" id="menu-bar-toolbar">
	<div class="toolbar-drag-handle" />
	<div class="menus" role="menubar" aria-label="Application Menu" style="touch-action: none;">
		<div
			class="menu-button item-disabled"
			aria-expanded="false"
			aria-haspopup="true"
			role="menuitem"
			tabindex="-1"
		>
			<span class="menu-hotkey">P</span>olish
		</div>
	</div>
	<div class="menus" role="menubar" aria-label="Application Menu" style="touch-action: none;">
		<div
			class="menu-button"
			aria-expanded="false"
			aria-haspopup="true"
			role="menuitem"
			tabindex="-1"
		>
			<span class="menu-hotkey">E</span>nglish
		</div>
	</div>
	<div class="note-date">
		<fieldset class="datexd">
			{date}
		</fieldset>

		<div class="buttons">
			<button class="arrow-button up-button" disabled> &#9650; </button>
			<button class="arrow-button down-button" disabled> &#9660; </button>
		</div>
	</div>
</div>

<style>
	.toolbar {
		display: flex;
		flex-direction: row;
		align-items: center;
		/* border: 1px solid var(--ButtonShadow); */
		margin: 2px;
		overflow: hidden;
		position: relative;
		color: var(--ButtonText);
		font-size: 10pt;
	}
	.datexd {
		padding: 0.1rem;
		margin: 0%;
		background-color: white;
		font-size: smaller;
	}
	.note-date {
		display: flex;
		align-items: center;
		margin-left: auto;
	}

	.buttons {
		display: flex;
		flex-direction: column;
		margin-left: auto;
		padding-left: 0.2rem;
		align-items: center;
	}
	.arrow-button {
		padding: 1.2px;
		min-width: 20px;
		min-height: 8px;

		font-size: 5px;
	}
	.menu-button {
		box-sizing: border-box;
		height: 18px;
		line-height: 1;
		padding: 2px 5px;
		position: relative;
		outline: 0;
		background: rgb(192, 192, 192);
	}

	.menu-button:hover {
		box-shadow:
			1px 1px 0 rgb(128 128 128) inset,
			-1px -1px 0 rgb(255 255 255) inset;
		box-shadow:
			1px 1px 0 rgb(128, 128, 128) inset,
			-1px -1px 0 rgb(128, 128, 128) inset;
		top: 1px;
		left: 1px;
		cursor: pointer;
		background-color: rgb(0, 0, 128);
		color: white;
	}
	.menus {
		flex: 0 0 auto;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.menu-hotkey {
		text-decoration: underline;
	}
	.item-disabled {
		color: rgb(128, 128, 128);
		text-shadow: 0.8px 0.8px 0px rgb(255 255 255);
	}
	.toolbar-drag-handle {
		align-self: stretch;
		position: relative;
		touch-action: none;
		color: #dfdfdf;
		border-width: 3px;
		left: 2px;
		top: 2px;
		width: 4px;
		bottom: 2px;
		margin-bottom: 2px;
		box-sizing: border-box;
		border-color: rgb(255, 255, 255) rgb(128, 128, 128) rgb(128, 128, 128) rgb(255, 255, 255);
		border: solid;
	}
</style>
