define(['require'], function(require) {
    "use strict";

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
        }
    };

    return model;
});