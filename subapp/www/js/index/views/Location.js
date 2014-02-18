define(['require'], function(require) {
    "use strict";
    var Backbone = require('backbone');
    var LocationModel = require('LocationModel');
    var DisasterModel = require('DisasterModel');
    return Backbone.View.extend({
        render: function() {
            $("#content").fadeOut(200, function() {
                $(this).load('views/location.html', function() {

                    DisasterModel.getDistinct('type', function(res) {
                        var html = "";
                        for (var i = 0; i < res.rows.length; i++) {
                            html += "<input type='checkbox' name='disaster_type' id='disaster_" + i + "' class='custom disaster-checkbox' value='" + res.rows.item(i).type + "'/>";
                            html += "<label for='disaster_" + i + "'>" + res.rows.item(i).type + "</label>";
                        }
                        $("#disaster-field-set").html(html);
                    });

                    LocationModel.getDistinct('province', function(res) {
                        var html = "";
                        for (var i = 0; i < res.rows.length; i++) {
                            html += "<input type='checkbox' name='province' id='province_" + i + "' class='custom province-checkbox' value='" + res.rows.item(i).province + "'/>";
                            html += "<label for='province_" + i + "'>" + res.rows.item(i).province + "</label>";
                        }
                        $("#province-field-set").html(html);
                    });

                    $(document).on('change', '.province-checkbox', function() {
                        var checked = [];
                        $(".province-checkbox:checked").each(function() {
                            checked.push($(this).val());
                        });
                        LocationModel.WhereIn(checked, 'province', function(res) {
                            var html = "";
                            for (var i = 0; i < res.rows.length; i++) {
                                html += "<input type='checkbox' name='location' id='location_" + i + "' class='custom location-checkbox' value='" + res.rows.item(i).id + "'/>";
                                html += "<label for='location_" + i + "'>" + res.rows.item(i).name + "</label>";
                            }
                            $("#location-field-set").html(html).trigger('create');

                        });
                    });

                    $("#locSearchBtn").on('click', function(e) {
                        e.preventDefault();
                        var from = $("#fromPicker").val();
                        var to = $("#toPicker").val();
                        var disasterTypes = [];
                        var locations = [];

                        //each disaster types
                        $(".disaster-checkbox:checked").each(function() {
                            disasterTypes.push($(this).val());
                        });

                        $(".location-checkbox:checked").each(function() {
                            locations.push($(this).val());
                        });

                        DisasterModel.Search(from, to, locations, disasterTypes, function(res) {
                            if (res.rows.length == 0) {
                                alert("None Found!");
                            } else {
                                console.log("saved temporarily");
                                DisasterModel.currentRows = res.rows;
                                Backbone.history.navigate("#location-output", {
                                    trigger: true
                                });
                            }
                        }, function(res) {});
                    });

                    $(this).trigger('create');
                }).fadeIn(200);
            });
        }
    });
});