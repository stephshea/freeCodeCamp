function isPrime(num) {
	for (var n = 2; n < num; n++) {
		if (num % n == 0) {
			return false;
		}
	}
	return true;
}

function sumPrimes(num) {
	var sum = 0;
	for (var n = 2; n <= num; n++)
		if (isPrime(n)) {
			sum += n;
		}
	return sum;
}
sumPrimes(10)