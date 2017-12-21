function repeatStringNumTimes(str, n) {
	if (n >= 0) {
		str = str.repeat(n);
	} else {
		str = "";
	}
	return str;
}
repeatStringNumTimes("abc", 3);