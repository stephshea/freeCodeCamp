function whatIsInAName(collection, source) {
  var arr = collection.filter(function(object) {
  for (var i in source) {
    if(source[i] != object[i]) {
      return false;
    }
  }
    return true;
  });
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
