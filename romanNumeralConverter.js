function convertToRoman(num) {
  var roman = "";
  var romanNums = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I:1
  };
  
  for (var key in romanNums) {
// console.log('key: ', key);  
// console.log('value: ', romanNums[key]);
 while (num >= romanNums[key]) {
   roman += key;
   num -= romanNums[key];
 }
  }
 return roman;
}
convertToRoman(36);

function convertToRoman(num) {
	var roman = "";
	var romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
	var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	for (var i = 0; i < numbers.length; i++) {
		while (num >= numbers[i]) {
			roman = roman + romanNumeral[i];
			num = num - numbers[i];
		}
	}
	return roman;
}
convertToRoman(36);