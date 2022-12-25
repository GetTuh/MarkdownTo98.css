<script lang="ts">
	export let text: string;
</script>

<!-- Textbox height has to be dependent on the length of the text!  -->
<textarea
	readonly
	style="margin:1rem;font-size: small;height:100%;width:-webkit-fill-available;width:-moz-available;padding:.5rem"
	>{text}</textarea
>
