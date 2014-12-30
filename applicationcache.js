// Application Cache JavaScript functionality

var appCache = window.applicationCache;

appCache.addEventListener('error', function(event) {
    // Error - probably offline
    outputStatus("Error - You're offline?");
}, false);

appCache.addEventListener('checking', function(event) {
    // checking for updates
    outputStatus("Checking for updates...");
}, false);

appCache.addEventListener('downloading', function(event) {
    // downloading
    outputStatus("Downloading updates...");
}, false);

appCache.addEventListener('progress', function(event) {
    // progress of download
    outputStatus(event.loaded + " of " + event.total + " downloaded.");
}, false);

appCache.addEventListener('cached', function(event) {
    // application cached
    outputStatus("Appcache updated.");
}, false);

appCache.addEventListener('idle', function(event) {
    // appCache functionallity idle
    outputStatus("Idle.");
}, false);

appCache.addEventListener('noupdate', function(event) {
   // no updates found
    outputStatus("No updates found.");
}, false);

appCache.addEventListener('updateready', function(event) {
    // an update to the appCache is ready on the server
    outputStatus("Update ready. refresh page to show changes.");
}, false);

function outputStatus(text) {
    document.getElementById('appcache-output').innerHTML += text + "<br>";
}

function updateAppcache() {

    appCache.update();
}

function swapAppcache() {
    if (appCache.status == appCache.UPDATEREADY) {
        appCache.swapCache();
    }
}