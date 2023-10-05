export default function getIPFromLocalstorage(IPAddress) {
	const IPs = JSON.parse(localStorage.getItem('IPs'));
	const requestedIP = IPs?.find(IPData => IPData.ip === IPAddress) || null;

	return requestedIP;
}
