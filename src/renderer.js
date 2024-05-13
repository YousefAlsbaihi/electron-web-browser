// Buttons
const backButton = document.getElementById('back-button')
const forwardButton = document.getElementById('forward-button')
const reloadButton = document.getElementById('reload-button')
const searchButton = document.getElementById('search-button')
const newWindowButton = document.getElementById('new-window-button')
// Url Input
var urlInput = document.getElementById('url-input')
// Web View
const webview = document.getElementById('webview')
// Global URL value
var url = '';

// Anonymous function will set google as default page when you open new window
(function () {
    if (!url) {
        url = 'https://google.com'
        handleUrl()
    }
})();

// Get page title when it's finish loading 
webview.addEventListener('did-finish-load', () => {
    webview.addEventListener('did-finish-load', () => {
        const title = webview.getTitle();
        document.title = title; // Update the HTML title with the website title
    });
});

// Listen for the start of page loading
webview.addEventListener('did-start-loading', () => {
    // Show the loading indicator
    loadingIndicator.style.display = 'block';
});

// Listen for the end of page loading
webview.addEventListener('did-stop-loading', () => {
    // Hide the loading indicator
    loadingIndicator.style.display = 'none';
});

// Allow popups in the browser
webview.setAttribute('allowpopups', 'true');

// keep the url and update it when the url changed
webview.addEventListener('did-navigate', (event) => {
    url = event.url;
    urlInput.value = url
})


// Loading Indicator
const loadingIndicator = document.getElementById('loading-indicator');


// Url Input, on press enter it wil go/search the entered text inside the input box
urlInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        handleUrl()
    }
});


// Back button on click go back
backButton.addEventListener('click', () => {
    webview.goBack();
})

// Forward button on click go forward
forwardButton.addEventListener('click', () => {
    webview.goForward();
})

// reload button on click refresh the page
reloadButton.addEventListener('click', () => {
    webview.reload();
})

// Open new window
newWindowButton.addEventListener('click', () => {
    api.newWindow();
})


// URL Handling
function handleUrl() {
    const inputUrl = urlInput.value;

    // Google search default URL
    // https://www.google.com/search?q=


    // Validate if input is URL then open it, and if it's not URL then search it in google
    if (isValidURL(inputUrl)) {
        if (inputUrl.startsWith("http://") || inputUrl.startsWith("https://")) {
            url = inputUrl;
        } else {
            url = 'http://' + inputUrl;
        }

    } else {
        url = 'https://google.com/search?q=' + inputUrl
    }

    webview.src = url;
}

// Check if input value is URL or not
function isValidURL(url) {
    // Regular expression for URL validation
    const urlPattern = new RegExp('^(https?://)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

    return urlPattern.test(url);
}
