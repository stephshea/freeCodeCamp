function slasher(arr, n) {
	return arr.slice(n);
}
slasher([1, 2, 3], 2);

//alternative
function slasher(arr, n) {
 arr.splice(0, n);
 return arr; 
}
slasher([1, 2, 3], 2);