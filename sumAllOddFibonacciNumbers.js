function sumFibs(num) {
	Array.prototype.last = function() {
		return this[this.length - 1];
	};
	Array.prototype.first = function() {
		return this[this.length - 2];
	};
	var fibArray = [1, 1];
	var oddArray = [];
	var totalOdds;
	for (var i = 1; i < num; i++) {
		fibArray.push(fibArray.first() + fibArray.last());
	}
	for (var j = 0; j < fibArray.length; j++) {
		if (fibArray[j] % 2 != 0 && fibArray[j] <= num) {
			oddArray.push(fibArray[j]);
		}
		totalOdds = oddArray.reduce(function(a, b) {
			return a + b;
		}, 0);
	}
	return totalOdds;
}
sumFibs(10);