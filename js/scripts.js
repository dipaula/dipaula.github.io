jQuery(function($) {

    'use strict';

    var HOME;
    var NAV;

    NAV = {
        init: function() {
            this.setup();
        },
        setup: function() {
            $('nav').each(function() {
              $(this).append(
                '<ul>'+
                  '<li><a href="/">Home</a></li>'+
                  '<li><a href="/about">About</a></li>'+
                  '<li><a href="/products">Products</a></li>'+
                '</ul>'
              );
            });
        }
    };
    NAV.init();

    HOME = {
        init: function() {
            this.testing();
        },
        testing: function() {
            $('body').each(function() {
              console.log("testing");
            });
        }
    };
    HOME.init();


});
