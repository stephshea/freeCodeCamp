function orbitalPeriod(arr) {
	var GM = 398600.4418;
	var earthRadius = 6367.4447;
	return arr.map(function(orbit) {
		var a = earthRadius + orbit.avgAlt;
		var orbital = Math.round((2 * Math.PI) * Math.sqrt((a ** 3) / GM));
		return {
			name: orbit.name,
			orbitalPeriod: orbital
		};
	});
}
orbitalPeriod([{
	name: "sputnik",
	avgAlt: 35873.5553
}]);


function orbitalPeriod(arr) {
	var orbitalArray = [];
	var GM = 398600.4418;
	var earthRadius = 6367.4447;
	for (var i in arr) {
		var a = earthRadius + arr[i].avgAlt;
		var orbital = Math.round((2 * Math.PI) * Math.sqrt((a ** 3) / GM));
		delete arr[0].avgAlt;
		orbitalArray.push({
			name: arr[i].name,
			orbitalPeriod: orbital
		});
	}
	return orbitalArray;
}
orbitalPeriod([{
	name: "sputnik",
	avgAlt: 35873.5553
}]);