var fs = require('fs'),// filesystem onemli
    args = require('system').args, // gelen parametreleri args alıyor
    page = require('webpage').create(); // phantom kendi kutuphanesi


page.content = fs.read(args[1]);

page.viewportSize = {
    width: 1024,
    height:1024
};

page.paperSize = {
    format: 'A2',
    orientation: 'landscape',
    margin: '1cm'
}


//tetikleme burada yapıyor 3000 3 saniye demek yuklenmesi için bu sekilde
window.setTimeout(function () {
    page.render(args[1]);
    phantom.exit();

}, 3000);

