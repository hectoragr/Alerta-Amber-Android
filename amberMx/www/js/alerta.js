var map;
var marker;
var l, ln;
    $(document).ready(function(){
     // prettyPrint();
      map = new GMaps({
        div: '#map',
        lat: -12.043333,
        lng: -77.028333,
         click: function(e){
           console.log(e.latLng);
           l = e.latLng.lat();
           ln = e.latLng.lng();
           map.addMarker({
        lat: l,
        lng: ln,
        title: 'Marker with InfoWindow',
        infoWindow: {
          content: '<p>HTML Content</p>'
        }
      });
        },
        dragend: function(e){
          alert('dragend');
        }
      });
    });