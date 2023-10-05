const IPs = new Set();

export default function saveIPToLocalstorage(IPData) {
	IPs.add(IPData);
	localStorage.setItem('IPs', JSON.stringify([...IPs]));
}
