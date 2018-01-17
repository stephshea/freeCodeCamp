function confirmEnding(str, target) {
	var start = str.length - target.length;
	if (str.substring(start, str.length) == target) {
		return true;
	}
	return false;
}
confirmEnding("Bastian", "n");