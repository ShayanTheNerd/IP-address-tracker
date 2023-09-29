let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let stopwatchInterval = null;
const resetBtn = document.querySelector('#stopwatchResetBtn');
const controlBtn = document.querySelector('#stopwatchControlBtn');
const timerContainer = document.querySelector('#stopwatchTimerContainer');

export default function initializeStopwatch() {
	controlBtn.addEventListener('click', stopwatchController);
	resetBtn.addEventListener('click', resetStopwatch);
}

function stopwatchController() {
	const controlBtnState = controlBtn.textContent.trim().toLowerCase();

	if (controlBtnState === 'start') {
		stopwatchInterval = setInterval(() => stopwatchOperator(timerContainer), 100);
		controlBtn.textContent = 'stop';
		resetBtn.classList.remove('hidden');
	} else {
		// Stop the timer counter
		clearInterval(stopwatchInterval);
		controlBtn.textContent = 'start';
	}
}

function resetStopwatch() {
	clearInterval(stopwatchInterval);
	milliseconds = seconds = minutes = 0;
	resetBtn.classList.add('hidden');
	controlBtn.textContent = 'start';
	timerContainer.textContent = '00 : 00 : 00';
}

function stopwatchOperator() {
	milliseconds += 10;
	seconds += Math.floor(milliseconds / 100);
	minutes += Math.floor(seconds / 60);
	milliseconds %= 100;
	seconds %= 60;
	minutes %= 60;

	const formatTimeComponent = timeComponent => timeComponent.toString().padStart(2, '0');
	const formattedTime = [minutes, seconds, milliseconds].map(formatTimeComponent).join(' : ');
	timerContainer.textContent = formattedTime;
}
