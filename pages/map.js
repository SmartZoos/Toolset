/* Questions: 
    * Is a roadmap display the best to use, or would a satellite view make it easier to navigate (or conversely: make it easier to get lost)?

*/


function myMap() {
    var mapOptions = {
	center: player.position,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
	disableDefaultUI: true
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var icon = { url: 'http://localhost/smartzoos/star_yellow.png',
	         size: new google.maps.Size(500, 472),
		 scaledSize: new google.maps.Size(32, 32),
	         origin: new google.maps.Point(0, 0),
	         anchor: new google.maps.Point(0, 0)
	       };

    var marker =  new google.maps.Marker({ position: { lat: 59.32944, lng: 18.06861 }, map: map, icon: icon });

    
}

