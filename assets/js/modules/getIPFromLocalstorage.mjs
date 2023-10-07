export default function getIPFromLocalstorage(IPAddress) {
	const IPs = JSON.parse(localStorage.getItem('IPs'))?.map(item => JSON.parse(item));
	const requestedIP = IPs?.find(IPData => IPData.ip === IPAddress) || null;

	return requestedIP;
}
