function mutation(arr) {
	var one = arr[0].toLowerCase().split("");
	var two = arr[1].toLowerCase().split("");
	for (var i = 0; i < two.length; i++) {
		if (one.indexOf(two[i]) < 0) {
			return false;
		}
	}
	return true;
}
mutation(["hello", "hey"]);