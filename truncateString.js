function truncateString(str, num) {
	// Clear out that junk in your trunk
	var newStr;
	for (var i = 0; i < str.length; i++) {
		if (num === 1) {
			newStr = str.slice(0, 1).concat("...");
		} else if (num === 2) {
			newStr = str.slice(0, 2).concat("...");
		} else if (str.length <= num) {
			newStr = str;
		} else if (str.length > num) {
			var slice = num - 3;
			newStr = str.slice(0, slice).concat("...");
		}
		return newStr;
	}
}
truncateString("Peter Piper picked a peck of pickled peppers", 2);