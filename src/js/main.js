'use strict';

/* =========================
   HEADER / BURGER MENU
========================= */
(() => {
	const body = document.body;
	const page = document.querySelector('.page');
	const header = document.querySelector('.header');
	const headerContainer = header?.querySelector('.header__container');
	const burger = header?.querySelector('.header__burger-btn');
	const navLinks = header?.querySelectorAll('.nav-list__link');

	if (!page || !header || !headerContainer || !burger) {
		return;
	}

	page.classList.remove('page--nojs');
	header.classList.remove('header--nojs');
	headerContainer.classList.remove('header__container--nojs');

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

	burger.addEventListener('click', () => {
		headerContainer.classList.contains('header__container--js')
			? closeMenu()
			: openMenu();
	});

	navLinks?.forEach((link) => link.addEventListener('click', closeMenu));
})();

/* =========================
   NEW IN SLIDER
========================= */
(() => {
	const slider = document.querySelector('.new-in__slider');
	if (!slider || typeof Swiper === 'undefined') {
		return;
	}

	slider.classList.remove('new-in__slider--nojs');

	new Swiper(slider, {
		navigation: {
			nextEl: '.new-in__slider-btn--next',
			prevEl: '.new-in__slider-btn--prev',
		},
		pagination: {
			el: '.new-in__slider-pagination',
			clickable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				pagination: {
					type: 'fraction',
				},
			},
			768: {
				slidesPerView: 2,
				slidesPerGroup: 2,
			},
			1024: {
				slidesPerView: 4,
				slidesPerGroup: 4,
			},
		},
		spaceBetween: 30,
		loop: true,
		speed: 800,
	});
})();

/* =========================
   VALUES HOVER
========================= */
(() => {
	const items = document.querySelectorAll('.values__item');
	if (!items.length) {
		return;
	}

	items.forEach((item) => {
		item.addEventListener('mouseenter', () => {
			items.forEach((el) => el.classList.remove('is-active'));
			item.classList.add('is-active');
		});
	});
})();

/* =========================
   ACCORDION (FAQ + FILTER)
========================= */
(() => {
	const accordions = document.querySelectorAll('.accordion');
	if (!accordions.length) {
		return;
	}

	accordions.forEach((accordion) => {
		accordion.classList.add('accordion--js');
		let openedTab = null;

		accordion.addEventListener('click', (e) => {
			const button = e.target.closest('.accordion__button');
			if (!button) {
				return;
			}

			const tab = button.closest('.accordion__tab');
			const isOpen = tab.classList.contains('accordion__tab--open');

			if (openedTab && openedTab !== tab) {
				openedTab.classList.remove('accordion__tab--open');
			}

			tab.classList.toggle('accordion__tab--open');
			openedTab = isOpen ? null : tab;
		});
	});
})();

/* =========================
   LOGIN MODAL
========================= */
(() => {
	const page = document.querySelector('.page');
	const popup = document.querySelector('.modal-login');
	const overlay = document.querySelector('.overlay');
	const btnOpenDesktop = document.querySelector('.header__login');
	const btnOpenMobile = document.querySelector('.user-menu__modal-login');

	if (!popup || !overlay || !btnOpenDesktop || !btnOpenMobile) {
		return;
	}

	const btnClose = popup.querySelector('.modal-login__close');

	const openPopup = (evt) => {
		evt.preventDefault();
		popup.classList.add('modal-login--active');
		overlay.classList.add('overlay--active');
		document.addEventListener('keydown', onEsc);
	};

	const closePopup = () => {
		popup.classList.remove('modal-login--active');
		overlay.classList.remove('overlay--active');
		document.removeEventListener('keydown', onEsc);
	};

	const onEsc = (evt) => {
		if (evt.key === 'Escape') {
			closePopup();
		}
	};

	btnOpenDesktop.addEventListener('click', openPopup);
	btnOpenMobile.addEventListener('click', openPopup);
	btnClose?.addEventListener('click', closePopup);
	overlay.addEventListener('click', closePopup);
})();

/* =========================
   CATALOG FILTER (MOBILE)
========================= */
(() => {
	const page = document.querySelector('.page');
	const filter = document.querySelector('.catalog__filter');
	const openBtn = document.querySelector('.catalog__filter-button');
	const closeBtn = document.querySelector('.filter__close');

	if (!filter || !openBtn || !closeBtn) {
		return;
	}

	filter.classList.remove('catalog__filter--nojs');

	const openFilter = (evt) => {
		evt.preventDefault();
		filter.classList.add('catalog__filter--js');
		document.addEventListener('keydown', onEsc);
	};

	const closeFilter = () => {
		filter.classList.remove('catalog__filter--js');
		document.removeEventListener('keydown', onEsc);
	};

	const onEsc = (evt) => {
		if (evt.key === 'Escape') {
			closeFilter();
		}
	};

	openBtn.addEventListener('click', openFilter);
	closeBtn.addEventListener('click', closeFilter);
})();

/* =========================
   RANGE SLIDER
========================= */
(() => {
	const range = document.querySelector('.range');
	if (!range) {
		return;
	}

	range.addEventListener('input', (evt) => {
		const input = evt.target;
		if (!input.id) {
			return;
		}

		range.style.setProperty(`--${input.id}`, input.value);
	});
})();
