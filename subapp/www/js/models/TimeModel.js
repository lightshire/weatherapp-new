define(['require'], function(require) {
    "use strict";

    var structure = {
        name: "TimeModel",
        table: 'times',
        properties: [{
            name: 'id',
            properties: 'char primary key not null unique'
        }, {
            name: 'TYear',
            properties: 'DATETIME'
        }, {
            name: 'TQuarter',
            properties: 'INTEGER'
        }, {
            name: 'TMonth',
            properties: 'TEXT'
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