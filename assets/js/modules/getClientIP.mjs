export default async function getClientIP() {
	let clientIP = localStorage.getItem('clientIP');

	if (clientIP) return clientIP;

	const response = await fetch('https://api.ipify.org');
	clientIP = await response.text();
	localStorage.setItem('clientIP', clientIP);

	return clientIP;
}
