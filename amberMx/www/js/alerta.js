/*var map;
var marker;
var l, ln;
    $(document).ready(function(){
      map = new GMaps({
        div: '#map',
        lat: -12.043333,
        lng: -77.028333
      });
      $(document).on('click', '#btn-lovi', function () {
        $('#map').css("width", "100%");
        $('#map').css("height", "200%");
        map.checkResize();
      });*/
      $(document).on("pagecreate", '.page-map', function () {
        if(navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position){
          initialize(position.coords.latitude,position.coords.longitude);
        });
      }
      });
    
    function initialize(lat,lng) {
      var latlng = new google.maps.LatLng(lat, lng);
      var myOptions = {
        zoom: 8,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"),myOptions);
    }
