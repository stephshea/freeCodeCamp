//two solutions
function diffArray(arr1, arr2) {
	var fullArr = arr1.concat(arr2);
	return fullArr.filter(function(num) {
		if (arr1.indexOf(num) === -1 || arr2.indexOf(num) === -1) {
			return num;
		}
	});
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


function diffArray(arr1, arr2) {
	var newArr = [];
	for (var i = 0; i < arr1.length; i++) {
		//interate thru arr1 
		if (arr2.indexOf(arr1[i]) === -1) {
			//find items in arr 2 not in arr1 
			newArr.push(arr1[i]);
		}
		//push those unique items to newArr
	}
	for (var j = 0; j < arr2.length; j++) {
		if (arr1.indexOf(arr2[j]) === -1) {
			//find items in arr 1 not in arr2 
			newArr.push(arr2[j]);
		}
	}
	return newArr;
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);