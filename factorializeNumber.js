function factorialize(num) {
	var result = 1;
	for (var i = 1; i <= num; i++) {
		result *= i;
	}
	return result;
}
factorialize(5);

function factorialize(num) {
    var total = 1;
    for(var i = num-1; i > 0; i--)
    {
    	total = num *= i;
    }
    return total; 
}
factorialize(5);