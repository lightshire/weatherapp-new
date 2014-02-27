define(['require'], function(require) {
    "use strict";
    var Backbone = require('backbone');

    var events = {
        onResultsViewLoad: function() {
            $(this).trigger('create');
            $("#content").delay(500).fadeIn(200);
            $(".btn-disaster").on('click', events.onBtnDisasterClicked);
        },
        onBtnDisasterClicked: function() {
            var href = $(this).attr('href');
            console.log(href);

            Backbone.history.navigate(href, {
                trigger: true
            });
        }
    };

    return Backbone.View.extend({
        render: function() {
            $("#content").fadeOut(200, function() {
                $(this).load('views/results.html', events.onResultsViewLoad);
            });
        }
    });
});