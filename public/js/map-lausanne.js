var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map_lausanne'), {
        center: {
            lat: 46.51795449999999, 
            lng: 6.6311731 
        },
        zoom: 19 
    });
}