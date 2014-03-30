
//Centers onMartsa on Elm restaurant
function initialize() {
        var map_canvas = document.getElementById('map-canvas');
        var map_options = {
          center: new google.maps.LatLng(42.394942, -71.121487),
          zoom: 17,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(map_canvas, map_options)
      }
      google.maps.event.addDomListener(window, 'load', initialize);