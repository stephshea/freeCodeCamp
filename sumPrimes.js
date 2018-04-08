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


function sumPrimes(num) {
  var x=2;
  var sum=2;
  while (x<num) {
    x++;
    for (var i=2;i<x;i++){
      if (x%i===0){
        break;
      }
      else if (i===x-1) {
        sum+=x;}
      }
   }
  return sum;
}

sumPrimes(10);


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