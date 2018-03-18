function translatePigLatin(str) {
	var consonants = str.split('');
	var vowels = ["a", "e", "i", "o", "u"];
	if (vowels.includes(str[0])) {
		return (str += 'way');
	} else {
		for (var i = 0; i < str.length; i++) {
			if (!vowels.includes(str[i])) {
				consonants.push(consonants.shift());
			} else {
				consonants.push('ay');
				return consonants.join('');
			}
		}
	}
}
translatePigLatin("glove");