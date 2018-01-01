// 1 get the first letter = firstChar
// 2 Check if next character is the next character in alphabet
//   3 Check if another character is available (length)
//     4 Repeat line 2 with next character
// 5 else
//     6 Return undefined
// 7 else
// Return expected character
function fearNotLetter(str) {
	var firstLetter = str[0];
	//   console.log(firstLetter.charCodeAt(0));
	//   console.log("code for b is", "b".charCodeAt(0));
	for (var i = 0; i < str.length - 1; i++) {
		//     console.log(str[i]);
		if (str.charCodeAt(i + 1) === str.charCodeAt(i) + 1) {
			console.log("next character is the next alphabetically");
		} else {
			console.log("found missing char");
			return String.fromCharCode(str.charCodeAt(i) + 1);
		}
	}
	return undefined;
}
fearNotLetter("abce");