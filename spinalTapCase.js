//remove _, spaces, separate joined words at cap, all letters lowercase
function spinalCase(str) {
	str = str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\s+/g, '-').replace(/\_+/g, '-').toLowerCase();
	return str;
}
spinalCase('isThis Spinal Tap');