<?php include "templates/header.php"; ?>

<div class="hidden" id="contact-infoWindow">
  <h1 id="contact-title">Martsa on Elm</h1>
        <div id="contact-content">
        <p>233 Elm St <br>Somerville, MA 02144</p>
        <p>(617) 666-0660</p>
        <a href="https://www.google.com/maps/place/Martsa+On+Elm/@42.394942,-71.121487,17z/data=!3m1!4b1!4m2!3m1!1s0x89e377189ecadaaf:0xf5b19bff92004f2b" style="cursor: pointer; color: #B8312C" target="_blank">Get Directions</a>
        </div>
</div>      

	<div id="map-canvas"></div>
  <div id="contact-content-container">
      <h1 id="contact-title-inset">Martsa on Elm</h1>
      <div id="contact-content-inset">
        <p>233 Elm St 
          <br> Somerville, MA 02144</p>
        <p>(617) 666-0660</p>
      </div>
  </div>

<script src="js/main.js"></script> 
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=true"></script>
<script src="js/map.js"></script>

</body>	
</html>