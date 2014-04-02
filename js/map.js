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

