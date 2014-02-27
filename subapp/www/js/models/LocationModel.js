define(['require'], function(require) {
    "use strict";

    var structure = {
        name: "LocationModel",
        table: 'locations',
        properties: [{
            name: 'id',
            properties: 'char primary key not null unique'
        }, {
            name: 'name',
            properties: 'char not null unique'
        }, {
            name: 'province',
            properties: 'text not null'
        }, {
            name: 'topography',
            properties: 'char'
        }, {
            name: 'classification',
            properties: 'char'
        }, {
            name: 'land_area',
            properties: 'integer'
        }, {
            name: 'population',
            properties: 'integer'
        }, {
            name: "population_density",
            properties: 'integer'
        }, {
            name: "code",
            properties: 'integer not null unique'
        }]
    };

    var model = {
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
            var db = window.sqlitePlugin.openDatabase("weather-app-proper", "1.0", 'Demo', 65536);
            db.transaction(function(tx) {
                tx.executeSql("select distinct " + column_name + " from " + structure.table + ";", [], function(tx, res) {
                    callback(res);
                });
            });
        },
        WhereIn: function(whereInArray, column_name, callback) {
            var db = window.sqlitePlugin.openDatabase("weather-app-proper", "1.0", 'Demo', 65536);
            var handlers = "";
            for (var i = 0; i < whereInArray.length; i++) {
                handlers += "?";
                if (i + 1 != whereInArray.length) {
                    handlers += ", ";
                }
            }

            db.transaction(function(tx) {
                tx.executeSql("select * from " + structure.table + " where " + column_name + " in(" + handlers + ")", whereInArray, function(tx, res) {
                    callback(res);
                });
            });
        }
    };

    return model;
});