const IPs = new Set(JSON.parse(localStorage.getItem('IPs')));

export default function saveIPToLocalstorage(IPData) {
	IPs.add(JSON.stringify(IPData)); // Stringified to store unique IP data objects
	localStorage.setItem('IPs', JSON.stringify([...IPs]));
}
