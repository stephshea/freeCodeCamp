function frankenSplice(arr1, arr2, n) {
  var arr2New = arr2.slice();
  var arr2Slice = arr2New.slice(n);
  var franken = arr2New.splice(0, n).concat(arr1).concat(arr2Slice);
  return(franken);
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);