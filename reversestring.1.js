
function reverseString(str) {
  var strArray = str.split("");
  
  strArray.reverse();
  
  var reversedStr = strArray.join("");
  
  return reversedStr;
}

reverseString("hello");