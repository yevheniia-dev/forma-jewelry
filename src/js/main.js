(() => {
	const body = document.body;
	const page = document.querySelector('.page');
	const header = document.querySelector('.header');
	const headerContainer = header?.querySelector('.header__container');
	const burger = header?.querySelector('.header__burger-btn');
	const navLinks = header?.querySelectorAll('.nav-list__link');
	const loginDesktop = header?.querySelector('.header__login');
	const loginMobile = header?.querySelector('.user-menu__modal-login');

	if (!header || !headerContainer || !burger) {
		return;
	}

	/* =========
     NO-JS
     ========= */
	page.classList.remove('page--nojs');
	header.classList.remove('header--nojs');
	headerContainer.classList.remove('header__container--nojs');

	/* =========
     MENU API
     ========= */
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

	/* =========
     EVENTS
     ========= */
	burger.addEventListener('click', toggleMenu);

	navLinks?.forEach((link) => {
		link.addEventListener('click', closeMenu);
	});

	loginDesktop?.addEventListener('click', closeMenu);
	loginMobile?.addEventListener('click', closeMenu);
})();
