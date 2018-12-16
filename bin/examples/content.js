var webPage = require('webpage');
var page = webPage.create();

page.open('http://ketencek.com', function (status) {
    var content = page.content;
    console.log('Content: ' + content);
    phantom.exit();
});