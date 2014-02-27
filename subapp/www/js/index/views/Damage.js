define(['require'], function(require) {
    "use strict";
    var Backbone = require('backbone');

    return Backbone.View.extend({
        render: function() {
            $("#content").fadeOut(200, function() {
                $(this).load('views/damages.html', function() {
                    $(this).trigger('create');
                }).fadeIn(200);
            });
        }
    });
});