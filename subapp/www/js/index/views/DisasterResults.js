define(['require'], function(require) {
    "use strict";
    var Backbone = require('backbone');

    var events = {
        onTmplLoad: function() {
            $(this).load('views/disaster-results.html', events.onmMainTplLoad);
        },
        onmMainTplLoad: function() {
            $(this).trigger('create');
            $("#content").delay(500).fadeIn(200);
        }
    };

    return Backbone.View.extend({
        render: function() {
            $("#content").fadeOut(200, events.onTmplLoad);
        }
    });
});