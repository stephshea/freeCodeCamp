function destroyer(arr) {
	var args = Array.prototype.slice.call(arguments);
	return arr.filter(function(num) {
		return !args.includes(num);
	});
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

function destroyer(arr ) {
  console.log(arguments);
  var args = Array.prototype.slice.call(arguments);
  console.log(args);
  return arr.filter(function(num) {
  return args.indexOf(num) === -1;

});
}
//   console.log(arguments);
//   var args = Array.from(arguments);
//