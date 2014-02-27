define(['require'], function(require) {
    "use strict";

    var Db = require("Db");

    var structure = {
        name: "DisasterModel",
        table: 'disasters',
        properties: [{
            name: 'id',
            properties: 'char primary key not null unique'
        }, {
            name: 'type',
            properties: 'char'
        }, {
            name: 'cost_infrastructure',
            properties: 'integer'
        }, {
            name: 'cost_agriculture',
            properties: 'integer'
        }, {
            name: 'cost_human_lives',
            properties: 'integer'
        }, {
            name: 'L_ID',
            properties: 'CHAR NOT NULL'
        }, {
            name: 'T_ID',
            properties: 'CHAR NOT NULL'
        }, {
            name: 'DDate',
            properties: 'datetime not null'
        }]
    };

    var model = {
        currentRows: null,
        createTable: function() {
            var properties = structure.properties;
            var sql = "create table if not exists " + structure.table + " (";
            for (var i = 0; i < properties.length; i++) {
                sql += properties[i].name + " " + properties[i].properties;
                if (i + 1 != properties.length) {
                    sql += ", ";
                }
            }
            sql += ")";
            return sql;
        },
        getDistinct: function(column_name, callback) {
            // var db = window.sqlitePlugin.openDatabase("weather-app-proper", "1.0", 'Demo', 65536);
            // db.transaction(function(tx) {
            //     tx.executeSql("select distinct " + column_name + " from " + structure.table + ";", [], function(tx, res) {
            //         callback(res);
            //     });
            // });
            var sql = "select distinct " + column_name + " from " + structure.table + ";";

            Db.make().execute(sql, [], function(res) {
                callback(res);
            }, function(e) {
                $.error("An error occured. " + e.message);
            });

        },
        Search: function(from, to, locations, disasters, onSuccessCallback, onFailureCallback) {
            var db = window.sqlitePlugin.openDatabase("weather-app-proper", "1.0", 'Demo', 65536);
            db.transaction(function(tx) {
                var disasterHandler = "";
                var locationHandler = "";
                var query = "";
                var finalHandler = [];
                for (var i = 0; i < locations.length; i++) {
                    locationHandler += "?";

                    if (i + 1 != locations.length) {
                        locationHandler += ", ";
                    }
                }

                for (var i = 0; i < disasters.length; i++) {
                    disasterHandler += "?";

                    if (i + 1 != disasters.length) {
                        disasterHandler += ", ";
                    }
                }
                finalHandler = finalHandler.concat(disasters);
                finalHandler = finalHandler.concat(locations);
                finalHandler.push(from);
                finalHandler.push(to);

                console.log("final variables: " + finalHandler.toString());

                query = "select d.* from " + structure.table + " AS d JOIN locations L ON d.L_ID=L.id where d.type in(" + disasterHandler + ") and  d.L_ID in(" + locationHandler + ") and  d.DDate between ? and ?;";
                console.log('query is: ' + query);
                tx.executeSql(query, finalHandler, function(tx, res) {
                    onSuccessCallback(res);
                }, onFailureCallback());
            });
        }
    };

    return model;
});