
function initWindow() {
    nw.Window.open('index.html', {}, function (win) { });

    // Get the current window
    const win = nw.Window.get();

    // Maximize the window to fill the entire screen
    win.maximize();

    win.on('loaded', function () {
        console.log('NW.js window loaded.');
    });

    win.on('closed', function () {
        console.log('NW.js window closed.');
    });
}

initWindow();