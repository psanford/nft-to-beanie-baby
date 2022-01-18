// This is forked from https://github.com/panicsteve/cloud-to-butt/blob/master/Source/content_script.js
walk(document.body);

function walk(node)
{
	var child, next;

	var tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (tagName == 'input' || tagName == 'textarea') {
		return;
	}
	if (node.classList && node.classList.contains('ace_editor')) {
		return;
	}

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/\bAn NFT\b/g, "A Beanie Baby");
	v = v.replace(/\ban NFT\b/g, "a Beanie Baby");
	v = v.replace(/\bNFTs\b/g, "Beanie Babies");
	v = v.replace(/\bNFT\b/g, "Beanie Baby");
	v = v.replace(/\bnft\b/g, "beanie baby");
  v = v.replace(/\bNon-fungible token\b/g, "Non-fungible baby");
  v = v.replace(/\bNon-Fungible Token\b/g, "Non-Fungible Baby");
  v = v.replace(/\bNon-Fungible token\b/g, "Non-Fungible baby");
  v = v.replace(/\bnon-fungible token\b/g, "non-fungible baby");

	textNode.nodeValue = v;
}
