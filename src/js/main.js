'use strict';

/* =====================
   HEADER / MENU
   ===================== */
(() => {
	const body = document.body;
	const page = document.querySelector('.page');
	const header = document.querySelector('.header');
	const headerContainer = header?.querySelector('.header__container');
	const burger = header?.querySelector('.header__burger-btn');
	const navLinks = header?.querySelectorAll('.nav-list__link');
	const loginDesktop = header?.querySelector('.header__login');
	const loginMobile = header?.querySelector('.user-menu__modal-login');

	if (!page || !header || !headerContainer || !burger) {
		return;
	}

	/* NO-JS */
	page.classList.remove('page--nojs');
	header.classList.remove('header--nojs');
	headerContainer.classList.remove('header__container--nojs');

	/* MENU API */
	const openMenu = () => {
		headerContainer.classList.add('header__container--js');
		body.classList.add('body--menu-open');
		page.classList.add('page--menu-open');
	};

	const closeMenu = () => {
		headerContainer.classList.remove('header__container--js');
		body.classList.remove('body--menu-open');
		page.classList.remove('page--menu-open');
	};

	const toggleMenu = () => {
		headerContainer.classList.contains('header__container--js')
			? closeMenu()
			: openMenu();
	};

	/* EVENTS */
	burger.addEventListener('click', toggleMenu);
	navLinks?.forEach((link) => link.addEventListener('click', closeMenu));
	loginDesktop?.addEventListener('click', closeMenu);
	loginMobile?.addEventListener('click', closeMenu);
})();

/* =====================
   NEW-IN SLIDER (SWIPER)
   ===================== */
(() => {
	const page = document.querySelector('.page');
	const newInSlider = document.querySelector('.new-in__slider');

	if (!page || !newInSlider || typeof Swiper === 'undefined') {
		return;
	}

	page.classList.remove('page--nojs');
	newInSlider.classList.remove('new-in__slider--nojs');

	new Swiper('.new-in__slider', {
		navigation: {
			nextEl: '.new-in__slider-btn--next',
			prevEl: '.new-in__slider-btn--prev',
		},
		pagination: {
			el: '.new-in__slider-pagination',
		},
		breakpoints: {
			320: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				pagination: {
					el: '.new-in__slider-pagination',
					type: 'fraction',
					clickable: false,
					renderFraction: function (currentClass, totalClass) {
						return (
							'<span class="' +
							currentClass +
							'"></span>' +
							' of ' +
							'<span class="' +
							totalClass +
							'"></span>'
						);
					},
				},
			},

			768: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				pagination: {
					el: '.new-in__slider-pagination',
					clickable: true,
					renderBullet: function (index, className) {
						return (
							'<span class="' +
							className +
							'">' +
							(index + 1) +
							'</span>'
						);
					},
				},
			},

			1024: {
				slidesPerView: 4,
				slidesPerGroup: 4,
				pagination: {
					el: '.new-in__slider-pagination',
					clickable: true,
					renderBullet: function (index, className) {
						return (
							'<span class="' +
							className +
							'">' +
							(index + 1) +
							'</span>'
						);
					},
				},
			},
		},

		simulateTouch: false,
		spaceBetween: 30,
		watchOverflow: true,
		loop: true,
		speed: 800,
	});
})();
