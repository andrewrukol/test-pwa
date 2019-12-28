const debug = false;
function log(message) {
    if (!debug) {
        return;
    }
    alert(message);
}

// keshiruem fajli
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
    .then(function(registration) {
        log("registered");
    })
    .catch(function(error) {
        log("registration failed");
        log(JSON.stringify(error));
    });
}

// Nastrojka knopki ustanovki dlja desktop kompjutera
window.addEventListener('beforeinstallprompt', (e) => {
    log("beforeinstallprompt");
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    console.log("beforeinstallprompt fired");
    if (setupButton == undefined) {
        setupButton = document.getElementById("setup_button");
    }
    // Show the setup button
    setupButton.style.display = "inline";
    setupButton.disabled = false;
});
