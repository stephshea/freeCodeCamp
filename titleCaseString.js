//a few solutions
function titleCase(str) {
	str = str.toLowerCase().split(" ");
	for (var i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	return str.join(" ");
}
titleCase("I'm a little tea pot");

function titleCase(str) {
	var words = str.toLowerCase().split(" ").map(function(word) {
		return word[0].toUpperCase() + word.slice(1);
	});
	return words.join(" ");
}
titleCase("I'm a little tea pot");

function titleCase(str) {
	var words = str.toLowerCase().split(" ");
	for (var i = 0; i < words.length; i++) {
		words[i] = words[i][0].toUpperCase() + words[i].slice(1);
	}
	return words.join(" ");
}
titleCase("I'm a little tea pot");