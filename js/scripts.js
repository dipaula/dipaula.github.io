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
                  '<li class="home"><a href="/">Home</a></li>'+
                  '<li class="about"><a href="/about">About</a></li>'+
                  '<li class="products"><a href="/products">Products</a></li>'+
                  '<li class="recipes"><a href="/recipes">Recipes</a></li>'+
                  '<li class="how-to"><a href="/how-to">How To...</a></li>'+
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
