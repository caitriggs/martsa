<?php include "templates/header.php"; ?>
	<div id="map-canvas"></div>

	<!-- Google Maps !-->
	<script src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>
    <script>
      function initialize() {
      	var myLatlng = new google.maps.LatLng(42.3949, -71.1215);
        var map_canvas = document.getElementById('map-canvas');
        var map_options = {
          center: myLatlng,
          zoom: 17,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(map_canvas, map_options)
        var marker = new google.maps.Marker({
	      position: myLatlng,
	      map: map,
	      title: 'Hello World!'
	  	});
      }
      google.maps.event.addDomListener(window, 'load', initialize);
    </script>	
</body>	