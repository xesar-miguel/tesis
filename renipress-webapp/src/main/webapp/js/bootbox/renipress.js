/*
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
*/
/* 
    Created on : 23/10/2015, 09:20:54 AM
    Author     : dlarico
*/
var Renipress = (function() {
    "use strict";

    var elem,
        hideHandler,
        that = {};

    that.init = function(options) {
        elem = $(options.selector);
    };

    that.show = function(text) {
        clearTimeout(hideHandler);

        elem.find("span").html(text);
        elem.fadeIn();

        hideHandler = setTimeout(function() {
            that.hide();
        }, 4000);
    };

    that.hide = function() {
        elem.fadeOut();
    };

    return that;
}());
