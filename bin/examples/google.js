var page = require('webpage').create();
page.open('http://google.com/', function() {
    page.render('google.png');
    console.log("Success");
    phantom.exit();
});