'use strict';

import getIPData from './modules/getIPData.mjs';
import getClientIP from './modules/getClientIP.mjs';
import displayIPData from './modules/displayIPData.mjs';
import toggleLoadingSpinner from './modules/toggleLoadingSpinner.mjs';

const IPInput = document.getElementById('IP_input');
const IPTrackerForm = document.getElementById('IP_tracker_form');

window.addEventListener('load', async () => {
	toggleLoadingSpinner();

	const clientIP = await getClientIP();
	const IPData = await getIPData(clientIP);
	displayIPData(IPData);

	toggleLoadingSpinner();
	const TW_LG_SCREEN_WIDTH = 1024;
	const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
	if (viewportWidth >= TW_LG_SCREEN_WIDTH) IPInput.focus();
});

IPTrackerForm.addEventListener('submit', async event => {
	event.preventDefault();
	toggleLoadingSpinner();

	const IPData = await getIPData(IPInput.value);
	displayIPData(IPData);

	toggleLoadingSpinner();
	IPInput.value = '';
	IPInput.focus();
});
