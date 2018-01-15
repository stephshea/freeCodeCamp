//a few solutions
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