function getIndexToIns(arr, num) {
	arr.push(num);
	arr.sort(function(a, b) {
		return a - b;
	});
	return arr.indexOf(num);
}
getIndexToIns([40, 5, 12, 1, 60], 50);

function getIndexToIns(arr, num) {
	var count = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] - num < 0) {
			count = count + 1;
		}
	}
	return count;
}
getIndexToIns([40, 60], 50);

function getIndexToIns(arr, num) {
	arr = arr.concat(num);
	arr.sort(function(a, b) {
		return a - b;
	});
	return arr.indexOf(num);
}
getIndexToIns([40, 60], 50);

function getIndexToIns(arr, num) {
	arr = arr.concat(num).sort(function(a, b) {
		return a - b;
	});
	return arr.indexOf(num);
}
getIndexToIns([40, 60], 50);