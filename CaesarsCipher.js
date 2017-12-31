function rot13(str) { // LBH QVQ VG!
	var winningArray = [];
	for (var i = 0; i < str.length; i++) {
		if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 77) {
			winningArray.push(String.fromCharCode(str.charCodeAt(i) + 13));
		} else if (str.charCodeAt(i) >= 78 && str.charCodeAt(i) <= 90) {
			winningArray.push(String.fromCharCode(str.charCodeAt(i) - 13));
		} else if (str.charCodeAt(i) < 65) {
			winningArray.push(str[i]);
		}
	}
	return winningArray.join("");
}
// Change the inputs below to test
rot13("SERR PBQR PNZC");


//alternative
function rot13(str) { // LBH QVQ VG!
	str = str.split('');
	return str.map(function(letter) {
		letter = letter.charCodeAt();
		console.log(letter);
		if (letter >= 65 && letter <= 77) {
			letter = letter + 13;
		} else if (letter >= 78 && letter <= 90) {
			letter = letter - 13;
		}
		return String.fromCharCode(letter);
	}).join('');
}
// Change the inputs below to test
rot13("SERR PBQR PNZC");