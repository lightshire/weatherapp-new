define(['require'], function(require) {
    "use strict";

    var properties = {
        instance: null,
        execute: function(sql, prop, onSuccess, onError) {
            if (properties.instance != null) {
                properties.instance.transaction(function(tx) {
                    tx.executeSql(sql, prop, function(tx, res) {
                        callback(res);
                    }, function(res) {
                        onError(res);
                    });
                });
            } else {
                $.error("Instance has not yet been executed!");
            }
        },
        make: function() {
            properties.instance = window.sqlitePlugin.openDatabase("weather-app-proper", "1.0", 'Demo', 65536);
            return this;
        }
    };

    return properties;
});