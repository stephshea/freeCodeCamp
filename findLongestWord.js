//a few solutions
function findLongestWord(str) {
	var longestWord = 0;
	str = str.split(" ");
	for (var i = 0; i < str.length; i++) {
		if (str[i].length > longestWord) {
			longestWord = str[i].length;
		}
	}
	return longestWord;
}
findLongestWord("The quick brown fox jumped over the lazy dog");

function findLongestWord(str) {
	var longestWord = str.split(" ").sort(function(a, b) {
		return b.length - a.length;
	});
	return longestWord[0].length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");

function findLongestWord(str) {
	str = str.split(" ").sort(function(a, b) {
		return b.length - a.length;
	});
	return str[0].length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");

function findLongestWord(str) {
	str = str.split(" ");
	var longest = "";
	for (var word of str) {
		if (word.length > longest.length) longest = word;
	}
	return longest.length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");