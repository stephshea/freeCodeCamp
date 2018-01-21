function largestOfFour(arr) {
	var largest = [];
	for (var i = 0; i < arr.length; i++) {
		arr[i].sort(function(a, b) {
			return b - a;
		});
		largest.push(arr[i][0]);
	}
	return largest;
}
largestOfFour([
	[4, 5, 1, 3],
	[13, 27, 18, 26],
	[32, 35, 37, 39],
	[1000, 1001, 857, 1]
]);

function largestOfFour(arr) {
	var largestArr = [];
	//outer loop, iterate thru main array
	for (var i = 0; i < arr.length; i++) {
		var tempMax = arr[i][0];
		//inner loop, iterate thru subarrays
		for (var j = 0; j < arr[i].length; j++) {
			var currentElem = arr[i][j];
			if (currentElem >= tempMax) {
				tempMax = currentElem;
			}
		}
		largestArr.push(tempMax);
	}
	return largestArr;
}
largestOfFour([
	[4, 5, 1, 3],
	[13, 27, 18, 26],
	[32, 35, 37, 39],
	[1000, 1001, 857, 1]
]);

function largestOfFour(arr) {
	var largestArr = [0, 0, 0, 0];
	for (var i = 0; i < arr.length; i++) {
		var tempMax = arr[i][0];
		for (var j = 0; j < arr[i].length; j++) {
			var currentElem = arr[i][j];
			if (currentElem > largestArr[i]) {
				largestArr[i] = currentElem;
			}
		}
	}
	return largestArr;
}
largestOfFour([
	[4, 5, 1, 3],
	[13, 27, 18, 26],
	[32, 35, 37, 39],
	[1000, 1001, 857, 1]
]);

function findMax(arr) {
	var max = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > max) max = arr[i];
	}
	return max;
}

function largestOfFour(arr) {
	var largestArr = [];
	for (var i = 0; i < arr.length; i++) {
		var innerMax = findMax(arr[i]);
		largestArr.push(innerMax);
	}
	return largestArr;
}
largestOfFour([
	[4, 5, 1, 3],
	[13, 27, 18, 26],
	[32, 35, 37, 39],
	[1000, 1001, 857, 1]
]);