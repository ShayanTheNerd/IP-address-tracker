let seconds = 0;
let minutes = null;
let countdownInterval = null;
const resetBtn = document.querySelector('#countdownResetBtn');
const minutesInput = document.querySelector('#countdownInput');
const timerForm = document.querySelector('#countdownTimerForm');
const controlBtn = document.querySelector('#countdownControlBtn');
const timerContainer = document.querySelector('#countdownTimerContainer');

export default function initializeCountdown() {
	timerForm.addEventListener('submit', event => {
		event.preventDefault();
		minutesInput.setAttribute('readonly', '');
		countdownController();
	});

	resetBtn.addEventListener('click', () => {
		minutesInput.removeAttribute('readonly');
		resetCountdown();
	});
}

function countdownController() {
	minutes ??= minutesInput.value;

	const controlBtnState = controlBtn.textContent.trim().toLowerCase();

	if (controlBtnState === 'start') {
		if (timerContainer.textContent === '00 : 00') countdownOperator(); // pre-call it only the first time

		countdownInterval = setInterval(() => countdownOperator(), 999);
		resetBtn.classList.remove('hidden');
		controlBtn.textContent = 'stop';
	} else {
		clearInterval(countdownInterval);
		controlBtn.textContent = 'start';
	}
}

function resetCountdown() {
	// stop and reset the timer counter
	clearInterval(countdownInterval);
	seconds = 0;
	minutes = null;
	minutesInput.textContent = '';
	resetBtn.classList.add('hidden');
	controlBtn.textContent = 'start';
	controlBtn.classList.remove('hidden');
	timerContainer.textContent = '00 : 00';
	minutesInput.focus();
}

function countdownOperator() {
	const [sec, min] = [seconds, minutes].map(item => item.toString().padStart(2, '0')); // formatted timer components
	timerContainer.textContent = `${min} : ${sec}`;
	seconds--;

	if (seconds <= 0) {
		seconds = 59;
		minutes--;
	}

	if (minutes < 0) {
		setTimeout(() => {
			clearInterval(countdownInterval);
			seconds = minutes = 0;
			controlBtn.classList.add('hidden');
			timerContainer.textContent = 'finished!';
		}, 500);
	}
}
