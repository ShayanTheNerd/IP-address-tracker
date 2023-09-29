export default function initializeCubicSlider() {
	const cubicSwiperSliderConfig = {
		speed: 550,
		hashNavigation: true,
		keyboard: { enabled: true },
		effect: 'cube',
		cubeEffect: { shadow: true, slideShadows: true, shadowOffset: 12.5, shadowScale: 1 },
		pagination: {
			el: '.cubic-slider__pagination',
			clickable: true,
			type: 'bullets',
			renderBullet(index, className) {
				let [name, twColor] = ['', ''];

				switch (index) {
					case 0: {
						name = 'clock';
						twColor = 'blue-500';
						break;
					}
					case 1: {
						name = 'stopwatch';
						twColor = 'yellow-400';
						break;
					}
					case 2: {
						name = 'countdown';
						twColor = 'green-500';
						break;
					}
					default: {
						name = 'unknown slide';
						twColor = '#0000004d';
						break;
					}
				}

				return `
               <a href="#${name}" role="tab" class="${className} aria-[current='true']:!bg-${twColor}">${name}</a>
            `;
			},
		},
	};

	new Swiper('.cubic-slider', cubicSwiperSliderConfig);
}
