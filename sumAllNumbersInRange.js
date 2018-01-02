  function sumAll(arr) {
  	var max = Math.max(arr[0], arr[1]);
  	var min = Math.min(arr[0], arr[1]);
  	var total = 0;
  	for (var i = min; i <= max; i++) {
  		total += i;
  	}
  	return total;
  }
  sumAll([1, 4]);
  
  
  //longer code w array
  function sumAll(arr) {
  	var max = Math.max(arr[0], arr[1]);
  	var min = Math.min(arr[0], arr[1]);
  	var numbers = [];
  	for (var i = min; i <= max; i++) {
  		numbers.push(i);
  	}
  	return numbers.reduce(function(a, b) {
  		return a + b;
  	});
  }
  sumAll([1, 4]);