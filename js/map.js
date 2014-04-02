// This example displays a marker at Martsa on Elm.
// The marker info window opens at page load, and
// when the user clicks the marker, an info window opens or closes.

function initialize() {
  var myLatlng = new google.maps.LatLng(42.395142,-71.121487);
  var myMarkerLatlng = new google.maps.LatLng(42.394942,-71.121487);

  var mapOptions = {
    zoom: 17,
    center: myLatlng
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var contentString = document.getElementById('contact-infoWindow').innerHTML;

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

  var marker = new google.maps.Marker({
      position: myMarkerLatlng,
      map: map,
      title: 'Martsa on Elm'
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
  infowindow.open(map,marker);
}

google.maps.event.addDomListener(window, 'load', initialize);


// Link to Google Maps for Martsa
// One link for iOS and any other device
function myNavFunc(){
    // If it's an iPhone..
    if( (navigator.platform.indexOf("iPhone") != -1) 
        || (navigator.platform.indexOf("iPod") != -1))
         window.open("maps://maps.google.com/maps/place/Martsa+On+Elm/@42.394942,-71.121487,17z/data=!3m1!4b1!4m2!3m1!1s0x89e377189ecadaaf:0xf5b19bff92004f2b");
    else
         window.open("https://www.google.com/maps/place/Martsa+On+Elm/@42.394942,-71.121487,17z/data=!3m1!4b1!4m2!3m1!1s0x89e377189ecadaaf:0xf5b19bff92004f2b");
}