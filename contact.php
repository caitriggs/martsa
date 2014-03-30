<?php include "templates/header.php"; ?>
	<div id="map-canvas"></div>

	<!-- Google Maps !-->
	<script src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>
    <script>
      function initialize() {
        var map_canvas = document.getElementById('map-canvas');
        var map_options = {
          center: new google.maps.LatLng(42.3949, -71.1215),
          zoom: 17,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(map_canvas, map_options)
      }
      google.maps.event.addDomListener(window, 'load', initialize);
    </script>	
</body>	