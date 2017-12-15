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
	 var dnaMap = {C:"G", G:"C", A:"T", T:"A"};
  
  
  var pairArray = [];
	for (var i = 0; i < str.length; i++) {
      pairArray.push([str[i], dnaMap[str[i]]]);
	}
	return pairArray;
}
pairElement("CGCTAGCA");