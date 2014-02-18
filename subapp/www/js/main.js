require.config({
    paths: {
        'jquery': 'jquery',
        'mobile': 'mobile',
        'underscore': 'underscore',
        'backbone': 'backbone',
        'app': 'index',
        'router': 'router',
        'LocationModel': 'models/LocationModel',
        'MeteorModel': 'models/MeteorModel',
        'DisasterModel': 'models/DisasterModel',
        'TimeModel': 'models/TimeModel',
        'datebox': 'datebox.core',
        'datebox-calbox': 'datebox.calbox'

    },
    urlArgs: 'bust=' + (new Date()).getTime(),
    shim: {
        'jquery': {
            exports: '$'
        },
        'mobile': {
            deps: ['jquery']
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
        },
        'underscore': {
            deps: ['jquery'],
            exports: "_"
        },
        'app': {
            deps: ['jquery']
        },
        'router': {
            deps: ['backbone']
        },
        'LocationModel': {
            deps: ['jquery', 'app']
        },
        'MeteorModel': {
            deps: ['jquery', 'app']
        },
        'TimeModel': {
            deps: ['jquery', 'app']
        },
        'DisasterModel': {
            deps: ['jquery', 'app']
        },
        'datebox-calbox': {
            deps: ['datebox']
        },
        'datebox': {
            deps: ['jquery', 'mobile']
        }
    }
});

require(['jquery', 'mobile', 'backbone', 'underscore', 'app', 'router', 'datebox-calbox'], function($, jqueryMobile, backbone, underscore, app, router, calbox) {
    var router = new router();
    backbone.history.start();

});