function initMap() {
	// add your code here
	L.mapquest.key = '1jkmtxPpewLw5AAQ5tLbF0AJsarXvLjD';

	// 'map' refers to a <div> element with the ID map
	L.mapquest.map('map', {
	center: [37.7749, -122.4194],
	layers: L.mapquest.tileLayer('map'),
	zoom: 12
	});
}