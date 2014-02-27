define(['require'], function(require) {
    "use strict;"
    var Backbone = require('backbone');
    var events = {
        onTplLoad: function() {
            $(this).load('views/profile.html', events.onProfileLoad);
        },
        onProfileLoad: function() {
            $(this).trigger('create');
            $("#content").delay(500).fadeIn(200);
        }
    };
    return Backbone.View.extend({
        render: function() {
            $("#content").fadeOut(200, events.onTplLoad);
        }
    });
});