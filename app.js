// Access the hamburger menu created in the HTML document
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');

// Access the ul, which is the menu for the mobile version of the webpage
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');

// Access the anchor text in ul
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');

// Access the header element as well
const header = document.querySelector('.header.container');

// Listen to the click event on the hamburger menu to show the items inside it.
hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

// Listen to the scroll event on the entire document to change the background color of the header section 
document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

// Listen to the click event on each item in the lists (hamburger, mobile_menu), and once an item is clicked, close the list automatically. 
menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});