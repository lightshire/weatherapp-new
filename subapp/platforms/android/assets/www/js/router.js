define(function(require) {
    var Backbone = require("backbone");
    // var $ = require('jquery');
    var title = $("#page-content");
    var homeBtn = $("#home-btn");
    $(".btn-href").on('click', function() {
        Backbone.history.navigate("#" + $(this).data('href'), {
            trigger: true
        });
    });
    homeBtn.on('click', function(e) {
        Backbone.history.navigate("#", {
            trigger: true
        });
        e.preventDefault();
    });
    return Backbone.Router.extend({
        routes: {
            "": "home",
            "/": "home",
            "location": 'location',
            "location-output": 'locationOutput',
            "weather": "weather",
            "damages": "damages",
            'db-upload': 'dbUpload'
        },
        locationOutput: function() {
            require(['app/views/LocOutput'], function(LocOutputView) {
                var locView = new LocOutputView({
                    $el: $("#content")
                });
                locView.render();
                title.html("Search Results");
                homeBtn.fadeIn(200);
            });
        },
        dbUpload: function() {
            require(['app/views/Sync'], function(SyncView) {
                var syncView = new SyncView({
                    $el: $("#content")
                });
                syncView.render();
                title.html("Sync Database");
                homeBtn.fadeIn(200);
            });
        },
        location: function() {
            require(['app/views/Location'], function(LocationView) {
                var weatherView = new LocationView({
                    $el: $("#content")
                });
                weatherView.render();
                title.html("Location Search");
                homeBtn.fadeIn(200);
            });
        },
        weather: function() {
            homeBtn.fadeIn(200);
            title.html("Weather Search");

            require(['app/views/Weather'], function(WeatherView) {
                var weatherView = new WeatherView({
                    $el: $("#content")
                });
                weatherView.render();
            });
        },
        damages: function() {
            homeBtn.fadeIn(200);
            title.html("Damages");

            require(['app/views/Damage'], function(DamageView) {
                var damageView = new DamageView({
                    $el: $("#content")
                });
                damageView.render();
            });
        },
        home: function() {
            require(['app/views/Home'], function(HomeView) {
                var homeView = new HomeView({
                    $el: $("#content")
                });
                homeView.render();
                title.html("Weather App");
                homeBtn.fadeOut(200);
            });
        }
    });
});