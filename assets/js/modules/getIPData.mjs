import saveIPToLocalstorage from './saveIPToLocalstorage.mjs';
import getIPFromLocalstorage from './getIPFromLocalstorage.mjs';

const API_KEY = 'at_LpaSegFgpA3KqnMMvDj04C20VXuXN';

export default async function getIPData(IPAddress) {
	let IPData = getIPFromLocalstorage(IPAddress);

	if (IPData) return IPData;

	const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${IPAddress}`);
	IPData = await response.json();
	saveIPToLocalstorage(IPData);

	return IPData;
}
