window.addEventListener('scroll', () => {
	const elements = document.querySelectorAll('.timeline__scroll-content');
	const screenSize = window.innerHeight;

	for (let i = 0; i < elements.length; i++) {
		if (elements[i].getBoundingClientRect().top < screenSize) {
			elements[i].classList.add('visible');
		} else {
			elements[i].classList.remove('visible');
		}
	}
});
