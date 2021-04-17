function initMap(){

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8,
        mapId: ''
      });

      map.addListener("click", (e) => {
        placeMarkerAndPanTo(e.latLng, map);
      });
}

function placeMarkerAndPanTo(latLng, map) {
    new google.maps.Marker({
      position: latLng,
      map: map,
    });
    map.panTo(latLng);
  }