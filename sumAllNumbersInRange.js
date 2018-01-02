function sumAll(arr) {
	var total = 0;
	var max = Math.max(arr[0], arr[1]);
	var min = Math.min(arr[0], arr[1]);
	var numbers = [];
	for (var i = min; i <= max; i++) {
		numbers.push(i);
	}
	total = numbers.reduce(function(a, b) {
		return a + b;
	});
	return total;
}
sumAll([1, 4]);