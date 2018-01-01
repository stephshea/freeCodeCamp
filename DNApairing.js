//another more efficient solution
function pairElement(str) {
	var pairs = {
		"C": "G",
		"G": "C",
		"T": "A",
		"A": "T"
	};
	return str.split("").map(function(item) {
		return [item, pairs[item]];
//same as in for (var elem in data) {
//console.log(elem, data[elem];)};*/		
	});
}
pairElement("GCG");

//my code
function pairElement(str) {
	 var mainArray = [];
  
	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) === "C") {
			mainArray.push(["C", "G"]);
		} else if (str.charAt(i) === "G") {
			mainArray.push(["G", "C"]);
		} else if (str.charAt(i) === "T") {
			mainArray.push(["T", "A"]);
		} else if (str.charAt(i) === "A") {
			mainArray.push(["A", "T"]);
		}
	}
	return mainArray;
}
pairElement("CGCTAGCA");

//more efficient

function pairElement(str) {
	var dnaMap = {
		C: "G",
		G: "C",
		A: "T",
		T: "A"
	};
	var pairArray = [];
	for (var i = 0; i < str.length; i++) {
		pairArray.push([str[i], dnaMap[str[i]]]);
	}
	return pairArray;
}
pairElement("CGCTAGCA");