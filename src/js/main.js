(() => {
	const header = document.querySelector('.header');
	const headerContainer = header.querySelector('.header__container');
	const headerToggle = header.querySelector('.header__burger-btn');
	const listItems = header.querySelectorAll('.nav-list__link');
	const page = document.querySelector('.page');
	const btnCall = document.querySelector('.header__login');
	const btnCallMobile = document.querySelector('.user-menu__modal-login');

	page.classList.remove('page--nojs');
	header.classList.remove('header--nojs');
	headerContainer.classList.remove('header__container--nojs');

	const onMenuClick = function () {
		header.classList.toggle('header--js');
		page.classList.toggle('page--js');
		headerContainer.classList.toggle('header__container--js');
	};

	for (let i = 0; i < listItems.length; i++) {
		listItems[i].addEventListener('click', onMenuClick);
	}
	btnCall.addEventListener('click', onMenuClick);
	btnCallMobile.addEventListener('click', onMenuClick);
	headerToggle.addEventListener('click', onMenuClick);
})();
