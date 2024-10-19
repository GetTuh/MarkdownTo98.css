<script lang="ts">
	export let text: string;
	let customStyle = `margin:1rem;;font-size: small;height:${text.split(' ')[0]}rem;width:-webkit-fill-available;width:-moz-available;width:-moz-available;padding:.5rem`;
	text = text
		.split(' ')
		.filter((_, index) => (index ? 1 : 0))
		.join(' ');
</script>

<!-- Textbox height has to be dependent on the length of the text!  -->
<textarea readonly style={customStyle}>{text}</textarea>
