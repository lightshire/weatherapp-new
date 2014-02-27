define(['require'], function(require) {
    "use strict";
    var Backbone = require('backbone');
    var weatherModel = require('MeteorModel');
    var disasterModel = require('DisasterModel');
    var events = {
        onBtnEventClicked: function(e) {
            e.preventDefault();
            // var objects = $("#mainWeatherForm").serializeObject();
            // weatherModel.SearchByRange(objects, function(res) {

            // });
            var url = "#results";
            Backbone.history.navigate(url, {
                trigger: true
            });
        }
    };

    return Backbone.View.extend({
        render: function() {
            $("#content").fadeOut(200, function() {
                $(this).load('views/weather.html', function() {

                    disasterModel.getDistinct('type', function(res) {
                        var html = "";
                        for (var i = 0; i < res.rows.length; i++) {
                            html += "<input type='checkbox' name='disaster_type' id='disaster_" + i + "' class='custom disaster-checkbox' value='" + res.rows.item(i).type + "' />";
                            html += "<label for='disaster_" + i + "'>" + res.rows.item(i).type + "</label>";
                        }
                        console.log(html);
                        $("#disaster-field-set").html(html);
                    });
                    $(this).trigger('create');
                    $('#btnWeatherSearch').on('click', events.onBtnEventClicked);
                }).fadeIn(200);
            });
        }
    });
});