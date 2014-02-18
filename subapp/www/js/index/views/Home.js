define(['require', 'text!../tpls/HomeView.tpl'], function(require, tpl) {
    "use strict";
    var Backbone = require('backbone');

    return Backbone.View.extend({
        render: function() {
            // var tpl = _.template(tpl, {});

            $("#content").load("views/home.html", function() {
                $(this).trigger('create');
                $(".btn-href").on('click', function() {
                    Backbone.history.navigate("#" + $(this).data('href'), {
                        trigger: true
                    });
                });
            });
        },
        initialize: function() {
            this.tpl_rendered = _.template(tpl, {});
        }
    });
});