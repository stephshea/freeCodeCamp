function convertHTML(str) {
	var entities = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'\"': '&quot;',
		'\'': '&apos;'
	};
	return str.split('').map(function(item) {
		//split and map give new array; above return is for map function
		return entities[item] || item;
		//entities is key; square brackets item signifies value || if no key, return item as is    
	}).join('');
}
// OR: return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
// }
convertHTML('Stuff in "quotation marks"');