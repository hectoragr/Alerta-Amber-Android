var map;
var marker;
var l, ln;
    $(document).ready(function(){
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
        }
      });
      max_height();
    });
    function max_height(){
 
    var h = $('div[data-role="header"]').outerHeight(true);
    var f = $('div[data-role="footer"]').outerHeight(true);
    var w = $(window).height();
    var c = $('div[data-role="content"]');
    var c_h = c.height();
    var c_oh = c.outerHeight(true);
    var c_new = w - h - f - c_oh + c_h;
    var total = h + f + c_oh;
    if(c_h<c.get(0).scrollHeight){
        c.height(c.get(0).scrollHeight);
    }else{
        c.height(c_new);
    }
}