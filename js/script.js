const burgerBtn = document.querySelector('.burger-btn');
const barsIcon = document.querySelector('.btn-bars');
const closeIcon = document.querySelector('.btn-close');
const navMobile = document.querySelector('.nav--mobile');
const navMobileLinks = document.querySelectorAll('.nav__link--mobile');
const shadow = document.querySelector('.shadow');

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
	carouselText.forEach((text) => (text.style.display = 'none'));
	carouselText[slideCount].style.display = 'block';
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

const handleIcon = () => {
	barsIcon.classList.toggle('icon-inactive');
	closeIcon.classList.toggle('icon-inactive');
};

const handleNav = () => {
	handleIcon();
	navMobile.classList.toggle('nav-active');
	shadow.classList.toggle('shadow-active');
};

navMobileLinks.forEach((link) => {
	link.addEventListener('click', () => {
		navMobile.classList.remove('nav-active');
		shadow.classList.remove('shadow-active');
		barsIcon.classList.remove('icon-inactive');
		closeIcon.classList.add('icon-inactive');
	});
});

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
burgerBtn.addEventListener('click', handleNav);
setInterval(nextSlide, 5000);
