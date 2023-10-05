const IPISP = document.getElementById('IP_ISP');
const IPAddress = document.getElementById('IP_address');
const IPLocation = document.getElementById('IP_location');
const IPTimezone = document.getElementById('IP_timezone');

export default function displayIPData(IPData) {
	/* prettier-ignore */
	const { ip, isp, location: { country, region, city, timezone } } = IPData;

	IPISP.textContent = isp;
	IPAddress.textContent = ip;
	IPTimezone.textContent = timezone;
	IPLocation.textContent = `${city}, ${region}, ${country}`;
}
