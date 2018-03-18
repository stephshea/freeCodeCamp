function uniteUnique(arr) {
	var args = Array.prototype.slice.call(arguments);
	args = args.reduce(function(accumulator, currentValue) {
		return accumulator.concat(currentValue);
	}, []);
	
	//alternative:
	// var   finalArray = args.filter(function(item, pos, self) {
	//     return self.indexOf(item) == pos;
	// });
	
	var finalArray = args.reduce(function(a, b) {
		if (a.indexOf(b) < 0) a.push(b);
		return a;
	}, []);
	return finalArray;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);