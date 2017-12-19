function isPrime(num) {
	for (var n = 2; n < num; n++) {
		if (num % n == 0) {
			return false;
		}
	}
	return true;
}

function sumPrimes(num) {
	var total = 2;
	for (var n = 3; n <= num; n++)
		if (isPrime(n)) {
			total += n;
		}
	return total;
}
sumPrimes(10);