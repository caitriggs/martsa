

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
	console.log(img);

	// Change the 'src' part of the img to change
	// which image file will be loaded
	img.src = photoURL;
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

