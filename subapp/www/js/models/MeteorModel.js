define(['require'], function(require) {
    "use strict";
    var Db = require('Db');
    var $ = require('jquery');
    var structure = {
        name: "MeteorModel",
        table: 'meteorological',
        properties: [{
            name: 'id',
            properties: 'char primary key not null unique'
        }, {
            name: 'average_precipitation',
            properties: 'integer'
        }, {
            name: 'average_temperature',
            properties: 'integer'
        }, {
            name: 'average_humidity',
            properties: 'integer'
        }, {
            name: 'average_wind_speed',
            properties: 'integer'
        }, {
            name: 'L_ID',
            properties: 'char not null'
        }, {
            name: 'T_ID',
            properties: 'char not null'
        }]
    };

    var propertiesDefault = {
        fromPrecip: 0,
        toPrecip: 2000,
        fromTemp: 0,
        toTemp: 2000,
        fromWind: 0,
        toWind: 2000,
        fromDate: "1970-01-01",
        toDate: "2020-12-30"

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
        SearchByRange: function(properties, callback) {
            $.extend(propertiesDefault, properties);

            properties = propertiesDefault;

            var sql = "select * from meteorological as m join times as t where m.T_ID = t.id and strftime('%Y-%m-%d', T.TYear || '-' || T.TMonth || '-01') between ? and ? and average_precipitation between ? and ? and average_wind_speed between ? and ? and average_temperature between ? and ?";
            var prop = [
                properties.fromDate,
                properties.toDate,
                properties.fromPrecip,
                properties.toPrecip,
                properties.fromWind,
                properties.toWind,
                properties.fromTemp,
                properties.toTemp
            ];
            Db.make().execute(sql, prop, function(res) {
                callback(res);
            }, function(e) {
                $.error("An error occured." + e.message);
            });
        }
    };

    return model;
});