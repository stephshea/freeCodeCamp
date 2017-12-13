function pairElement(str) {
	var mainArray = [];
	var pairArray = [];
	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) === "C") {
			pairArray = ["C", "G"];
			mainArray.push(pairArray);
		} else if (str.charAt(i) === "G") {
			pairArray = ["G", "C"];
			mainArray.push(pairArray);
		} else if (str.charAt(i) === "T") {
			pairArray = ["T", "A"];
			mainArray.push(pairArray);
		} else if (str.charAt(i) === "A") {
			pairArray = ["A", "T"];
			mainArray.push(pairArray);
		}
	}
	return mainArray;
}
pairElement("CGCTA");