function chunkArrayInGroups(arr, size) {
	var multiArray = [];
	for (var i = 0; i < arr.length; i += size) {
		multiArray.push(arr.slice(i, i + size));
	}
	return multiArray;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);