<script lang="ts">
	let demo = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad pariatur est, ea vitae iste
						modi mollitia adipisci a. Aliquam quaerat enim incidunt sint nobis accusamus hic rem
						similique provident voluptate`

	let demo2: string[] = [];
    const betterarr=demo.split('#')
    
	let arr = betterarr[0].split('\n');

	for (let i = 0; i < arr.length; i++) {
		let currentLine = arr[i];
		const headerRegex = new RegExp('(# +)(.*)');
		if (headerRegex.test(currentLine)) {
			//replace # with empty (or h1)
			currentLine = `<div class="window" style="width:39rem; padding:1rem"><div class="title-bar" style="height:2rem"><h4 class="title-bar-text">${currentLine}</h4><div class="title-bar-controls">
    <button aria-label="Close"></button>
  </div></div>`;
		}
		demo2.push(currentLine + `</br>`);
	}</div>
</script>

<body>
	{@html demo2}
</body>

<style>
</style>
