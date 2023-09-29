'use strict';

import initializeClockPanel from './modules/initializeClockPanel.mjs';
import initializeCubicSlider from './modules/initializeCubicSlider.mjs';
import { getURLHashValue, upperCaseFirstLetter } from './modules/utils.mjs';

initializeCubicSlider();
initializeClockPanel();

// Dynamically load modules based on the hash in the URL
window.addEventListener('hashchange', () => loadModuleByHash(getURLHashValue()));

async function loadModuleByHash(hash = getURLHashValue()) {
	if (!hash || hash === 'clock') return;

	const moduleName = upperCaseFirstLetter(hash);
	const module = (await import(`./modules/initialize${moduleName}.mjs`)).default;

	module();
}

// Run on page load
window.dispatchEvent(new Event('hashchange'));
