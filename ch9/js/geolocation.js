var elMap = document.getElementById('loc');
var msg = 'Sorry, we were unable to get your location'

if (Modernizr.geolocation) {
    navigator.geolocation.getCurrentPosition(success, fali);
    elMap.textContent = 'Checking location...';
} else {
    elMap.textConcent = msg;
}

function success(postion) {
    msg = '<h3>Longitude:<br>';
    msg += position.coords.latitude + '</h3>';
    msg += '<h3>Latitude:<br>'
    msg += position.coords.longtidue + '</h3>';
    elMap.innerHTML = msg;
}

function fail(msg) {
    elMap.textContent = msg;
    console.log(msg.code);
}
