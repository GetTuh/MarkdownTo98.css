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
			class="menu-button "
			aria-expanded="false"
			aria-haspopup="true"
			role="menuitem"
			tabindex="-1"
		>
			<span class="menu-hotkey">E</span>nglish
		</div>
	</div>
</div>

<style>
	.toolbar {
		display: flex;
		flex-direction: row;
		align-items: center;
		/* border: 1px solid var(--ButtonShadow); */
		/* margin: 2px; */
		overflow: hidden;
		position: relative;
		color: var(--ButtonText);
		font-family: sans-serif;
		font-size: 10pt;
	}
	.menu-button {
		box-sizing: border-box;
		height: 18px;
		line-height: 1;
		margin-top: 1px;
		margin-bottom: 1px;
		padding: 2px 5px;
		position: relative;
		outline: 0;
		background: rgb(192, 192, 192);
	}

	.menu-button:hover {
		box-shadow: 1px 1px 0 rgb(128 128 128) inset, -1px -1px 0 rgb(255 255 255) inset;
		box-shadow: 1px 1px 0 rgb(128, 128, 128) inset, -1px -1px 0 rgb(128, 128, 128) inset;
		top: 1px;
		left: 1px;
		cursor: pointer;
		background-color: rgb(0, 0, 128);
		color:white
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
    .item-disabled{
        color: rgb(128, 128, 128);
    text-shadow: 0.8px 0.8px 0px rgb(255 255 255);
    }
</style>
