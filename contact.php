<?php include "templates/header.php"; ?>

<div class="hidden" id="contact-infoWindow">
  <h1 id="contact-title">Martsa on Elm</h1>
        <div id="contact-content">
        <p>233 Elm St <br>Somerville, MA 02144</p>
        <p>(617) 666-0660</p>
        <a href="#" style="cursor: pointer; color: #B8312C" onclick="myNavFunc()">Get Directions</a>
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

<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=true"></script>
<script src="js/map.js"></script>

</body>	
</html>