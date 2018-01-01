function destroyer(arr) {
	var args = Array.prototype.slice.call(arguments);
	return arr.filter(function(num) {
		return !args.includes(num);
	});
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);