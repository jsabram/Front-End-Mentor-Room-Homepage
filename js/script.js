const carousel = document.querySelector('.carousel');
const carouselText = document.querySelectorAll('.main-top__description');
const prevBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');
let transformValue = 0;
let slideCount = 0;

const changeSlide = () => {
	carousel.style.transform = `translateX(-${transformValue}px)`;
};

const changeText = () => {
	if (slideCount == 0) {
		carouselText[0].style.display = 'block';
		carouselText[1].style.display = 'none';
		carouselText[2].style.display = 'none';
	} else if (slideCount == 1) {
		carouselText[0].style.display = 'none';
		carouselText[1].style.display = 'block';
		carouselText[2].style.display = 'none';
	} else {
		carouselText[0].style.display = 'none';
		carouselText[1].style.display = 'none';
		carouselText[2].style.display = 'block';
	}
};

const nextSlide = () => {
	let carouselWidth = carousel.offsetWidth;

	if (slideCount < 2) {
		transformValue = transformValue + carouselWidth;
		changeSlide();
		slideCount++;
		changeText();
	} else {
		transformValue = 0;
		changeSlide();
		slideCount = 0;
		changeText();
	}
};

const prevSlide = () => {
	let carouselWidth = carousel.offsetWidth;

	if (slideCount > 0) {
		transformValue = transformValue - carouselWidth;
		changeSlide();
		slideCount--;
		changeText();
	} else {
		transformValue = transformValue + 2 * carouselWidth;
		changeSlide();
		slideCount = 2;
		changeText();
	}
};

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
setInterval(nextSlide, 5000);
