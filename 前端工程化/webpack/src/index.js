
var $= require('./jquery-3.2.1.min.js');
var Carousel= require('./carousel.js'),
    exposure= require('./exposure.js'),
    _goTop= require('./gotop.js');

    Carousel.init($('.carousel'));
    exposure($('.exposure'));
    _goTop.start($('.gotop'));