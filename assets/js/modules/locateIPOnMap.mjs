const map = L.map('map', {
	zoom: 13,
	zoomControl: false,
	attributionControl: false,
});
const markerIcon = L.icon({
	iconSize: [46, 56],
	iconUrl: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='46' height='56'%3E%3Cpath fill-rule='evenodd' d='M39.263 7.673c8.897 8.812 8.966 23.168.153 32.065l-.153.153L23 56 6.737 39.89C-2.16 31.079-2.23 16.723 6.584 7.826l.153-.152c9.007-8.922 23.52-8.922 32.526 0zM23 14.435c-5.211 0-9.436 4.185-9.436 9.347S17.79 33.128 23 33.128s9.436-4.184 9.436-9.346S28.21 14.435 23 14.435z' /%3E%3C/svg%3E%0A`,
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);

function displayPopupOnClick({ latlng: { lat, lng: long } }) {
	const popupMessage = `<strong>latitude: ${lat} <br /> longitude: ${long}</strong>`;

	L.popup().setLatLng({ lat, lng: long }).setContent(popupMessage).openOn(map);
}

export default function locateIPOnMap(lat, long) {
	map.setView([lat, long]);
	L.marker([lat, long], { icon: markerIcon }).on('click', displayPopupOnClick).addTo(map);
}
