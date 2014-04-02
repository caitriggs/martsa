
// Changes photo in the homePhotos array every 5 second
var homePhotos = [
	"img/home_photos/tibetan_01.jpg",
	"img/home_photos/tibetan_11.jpg",
	"img/home_photos/tibet_colors.jpg",
	"img/home_photos/tibetan_02.jpg",
	"img/home_photos/tibetan_03.jpg",
	"img/home_photos/tibetan_04.jpg",
	"img/home_photos/tibetan_05.jpg",
	"img/home_photos/tibetan_07.jpg",
	"img/home_photos/tibetan_09.jpg",
	"img/home_photos/tibetan_10.jpg"
];

var index = 0;

function showPhoto (photoURL) {
	// Get a reference to the HTML img element
	var img = document.getElementById('homeImage');

	// Change the 'src' part of the img to change
	// which image file will be loaded if on Home page
	if (img) {
		img.src = photoURL;
	}
}

function getNextImgURL() {
	// if photo number exists in the length of the array, 
	// increase index
	if (index + 1 <= homePhotos.length - 1) {
		index = index + 1;
	}
	// else, it's outside of the array, and go back to index 0.
	else {
		index = 0;
	}
	return homePhotos[index];
}

function changeSeconds() {
	var nextPhoto = getNextImgURL();
	showPhoto(nextPhoto);
}

showPhoto(homePhotos[0]);
setInterval(changeSeconds, 4000);


// Changes background of selected menu button
var menuLinks = document.querySelectorAll('li a');

menuLinks = Array.prototype.slice.call(menuLinks);

menuLinks.forEach(function (link) {
	if (link.href == window.location.href) {
		link.className = 'buttonSelected';
	}

});




