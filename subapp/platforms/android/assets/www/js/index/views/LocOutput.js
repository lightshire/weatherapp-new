define(['require'], function(require) {
    "use strict";
    var Backbone = require('backbone');
    var DisasterModel = require('DisasterModel');

    return Backbone.View.extend({
        render: function() {
            $("#content").fadeOut(200, function() {
                $(this).load('views/loc_output.html', function() {
                    var rows = DisasterModel.currentRows;
                    if (rows != null) {
                        console.log("rows are not null");
                        var html = "";
                        var output = $("#searchOutput");
                        console.log("row length: " + rows.length);
                        for (var i = 0; i < rows.length; i++) {
                            html += "<tr>";
                            html += "<td></td>";
                            html += "<td>" + rows.item(i).type + "</td>";
                            html += "<td>" + rows.item(i).DDate + "</td>";
                            html += "</tr>";
                        }
                        output.html(html);
                    }
                    $(this).trigger('create');
                }).fadeIn(200);
            })
        }
    });
});