var map;
    $(document).ready(function(){
     // prettyPrint();
      map = new GMaps({
        div: '#map',
        lat: -12.043333,
        lng: -77.028333,
         click: function (results, status){
         	alert();
            if(status=='OK'){
              var latlng = results[0].geometry.location;
              map.setCenter(latlng.lat(), latlng.lng());
              alert(latlng);
            }
        },
        dragend: function(e){
          alert('dragend');
        }
      });
      //
     /* GMaps.geolocate({
        success: function(position){
          map.setCenter(position.coords.latitude, position.coords.longitude);
        },
        error: function(error){
          alert('Geolocation failed: '+error.message);
        },
        not_supported: function(){
          alert("Your browser does not support geolocation");
        },
        always: function(){
          alert("Done!");
        }
      });*/
    });