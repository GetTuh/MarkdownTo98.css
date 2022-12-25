import { assert, describe, it } from 'vitest';
import { addParagraphs } from 'src/routes/convert.svelte';

describe('Breaks to paragraphs', async () => {
	const testPattern = `lorema skodk oaskdo 
    asdokasod
    doaksodkasd
    asdaosdk`;
	it('foo', () => {
		fetch('testMarkupUncrypted.md').then((data) => data);
		console.log();
		// assert.equal(addParagraphs(testPattern),'<p>lorema skodk oaskdo</p><p>asdokasod</p><p>doaksodkasd</p><p>asdaosdk')
	});
});
