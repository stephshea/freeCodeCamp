function sumPrimes(num) {
	var totalPrimes = 0;
	var primesArray = [];
	for (var i = 2; i <= num; i++) {
		if ((i === 2) || (i === 3) || (i === 5) || (i === 7)) {
			primesArray.push(i);
		}
		if ((i % 2 != 0) && (i % 3 != 0) && (i % 5 != 0) && (i % 7 != 0)) {
			primesArray.push(i);
		}
	}
	totalPrimes = primesArray.reduce(function(acc, value) {
		return acc + value;
	}, 0);
	return totalPrimes;
}
sumPrimes(10);