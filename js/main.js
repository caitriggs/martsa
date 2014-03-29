

var homePhotos = [
	"img/home_photos/tibetan_01.jpg",
	"img/home_photos/tibetan_02.jpg",
	"img/home_photos/tibetan_03.jpg",
	"img/home_photos/tibetan_04.jpg",
	"img/home_photos/tibetan_05.jpg",
	"img/home_photos/tibetan_06.jpg",
	"img/home_photos/tibetan_07.jpg"
];

var index = 0;
console.log(homePhotos[0]);

var currentPhoto = homePhotos[index];

function nextPhoto(){
	// if photo number exists in the length of the array,
	if ((index + 1) <= (homePhotos.length - 1)) {
		index = index + 1;
	}
	// else, it's outside of the array, and go back to 0.
	else {
		index = 0;
	}
	currentPhoto = homePhotos[index];
	console.log(index,currentPhoto);
}

