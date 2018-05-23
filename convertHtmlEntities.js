var hashMap = {
     '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;'
};

function convertHTML(str) {
    return str.split('').map(function(char) {return hashMap[char] ? hashMap[char] : char;}).join('');
}

function convertHTML(str) {
    var strArray = str.split('');
    strArray = strArray.map(function(char) {
        return hashMap[char] ? hashMap[char] : char;
    });
    str = strArray.join('');
    return str;
}

function convertHTML(str) {
    var strArray = str.split('');
    strArray = strArray.map(function(char) {
        if (hashMap[char]) {
            return hashMap[char];
        }
        return char;
    });
    str = strArray.join('');
    return str;
}


function convertHTML(str) {
	var entities = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'\"': '&quot;',
		'\'': '&apos;'
	};
	return str.split('').map(function(item) {
		//split and map give new array; above return is for map function
		return entities[item] || item;
		//entities is key; square brackets item signifies value || if no key, return item as is    
	}).join('');
}
convertHTML('Stuff in "quotation marks"');