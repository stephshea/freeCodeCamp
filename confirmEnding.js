function confirmEnding(str, target) {
	var start = str.length - target.length;
	if (str.substring(start, str.length) == target) {
		return true;
	}
	return false;
}
confirmEnding("Bastian", "n");

function confirmEnding(str, target) {
	var start = 0 - target.length;
	return target === str.slice(start);
}
confirmEnding("Bastian", "n");

function confirmEnding(str, target) {
	return target === str.slice(-Math.abs(target.length));
}
confirmEnding("Bastian", "n");