'use strict';

// /* prettier-ignore */
// const { ip: IP, isp, location: { country, region, city, lat, lgn: long, timezone } } = await response.json();

import getIPData from './modules/getIPData.mjs';
import getClientIP from './modules/getClientIP.mjs';
import displayIPData from './modules/displayIPData.mjs';

const IPInput = document.getElementById('IP_input');
const IPTrackerForm = document.getElementById('IP_tracker_form');

window.addEventListener('load', async () => {
	IPInput.focus();

	const clientIP = await getClientIP();
	const IPData = await getIPData(clientIP);

	displayIPData(IPData);
});

IPTrackerForm.addEventListener('submit', async event => {
	event.preventDefault();

	const IPData = await getIPData(IPInput.value);
	displayIPData(IPData);
});
