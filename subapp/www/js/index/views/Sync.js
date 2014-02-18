define(['require'], function(require) {
    "use strict";
    var Backbone = require('backbone');

    return Backbone.View.extend({
        render: function() {
            $('#content').fadeOut(200, function() {
                $(this).load('views/sync.html', function() {
                    $(this).trigger('create');
                    var preMadeLoc = [
                        ['L12', 'BALBALAN', 'KALINGA', 'Mountanious', '3rd', 54269, 12082, 0.22, 143201000],
                        ['L8', 'AGUINALDO ', 'IFUGAO ', 'Mountainous', '2nd', 53805, 18610, 0.35, 142708000],
                        ['L7', 'ALFONSO', 'LISTA', 'IFUGAO', 'Mountainous', '3rd', 34746, 28410, 0.82, 142707000],
                        ['L11', 'ASIPULO', 'IFUGAO', 'Mountainous', '5th', 18287, 14403, 0.79, 142711000],
                        ['L1', 'BANAUE', 'IFUGAO', 'Mountainous', '4th', 19120, 22365, 1.17, 142701000],
                        ['L17', 'CITY OF TABUK', 'KALINGA', 'Mountainous', 70025, 103912, 1.48, 143213000]
                        ['L9', 'HINGYON', 'IFUGAO', 'Mountainous', '5th', 6202, 9795, 1.58, 142709000],
                        ['L2', 'HUNGDUAN', 'IFUGAO', 'Mountainous', '4th', 26030, 9933, 0.38, 142702000],
                        ['L3', 'KIANGAN', 'IFUGAO', 'Mountainous', '4th', 20000, 15837, 0.79, 142703000],
                        ['L4', 'LAGAWE', 'IFUGAO ', 'Mountainous', '4th', 20891, 18077, 0.87, 142704000],
                        ['L5', 'LAMUT', 'IFUGAO', 'Mountainous', '4th', 15965, 23088, 1.45, 142705000],
                        ['L13', 'LUBUAGAN', 'KALINGA', 'Mountainous', '4th', 23420, 9369, 0.4, 143206000],
                        ['L6', 'MAYOYAO', 'IFUGAO', 'Mouzntainous', '4th', 23805, 16413, 0.69, 142706000],
                        ['L14', 'PASIL', 'KALINGA', 'Mountainous', '5th', 18900, 9626, 0.51, 143208000],
                        ['L15', 'PINUKPUK', 'KALINGA', 'Mountainous', '1st', 74356, 29596, 0.4, 143209000],
                        ['L16', 'RIZAL', 'KALINGA', 'Mountainous', '4th', 23100, 15942, 0.69, 143211000],
                        ['L18', 'TANUDAN', 'KALINGA', 'Mountainous', '4th', 30755, 8529, 0.28, 143214000],
                        ['L19', 'TINGLAYAN', 'KALINGA', 'Mountainous', '4th', 28300, 12557, 0.44, 143215000],
                        ['L10', 'TINOC', 'IFUGAO', 'Mountainous', '4th', 23970, 14147, 0.59, 142710000]
                    ];

                    var preMadeDisaster = [
                        ["D1", 'Landslide', 135454, 54544, 120, 'L1', 'T1', '2014-01-13'],
                        ['D2', 'Earthquake', 231321, 54655, 213, 'L2', 'T2', '2010-02-14'],
                        ['D3', 'Rain Storm', 564544, 56522, 420, 'L3', 'T3', '2010-03-15'],
                        ['D4', 'Wildfire', 213545, 58456, 102, 'L4', 'T4', '2010-04-16'],
                        ['D5', 'Cyclone', 238722, 56456, 65, 'L5', 'T5', '2010-05-17'],
                        ['D6', 'Storm Surge', 15647141, 165564, 2314, 'L6', 'T6', '2010-06-18'],
                        ['D7', 'Landslide', 123456, 654321, 214, 'L1', 'T7', '2010-07-19'],
                        ['D8', 'Landslide', 74213, 23123, 120, 'L1', 'T8', '2010-08-20'],
                        ['D9', 'Landslide', 0, 0, 0, 'L1', 'T9', '2010-09-21'],
                        ['D10', 'Earthquake', 4123213, 0, 0, 'L1', 'T10', '2010-10-22'],
                        ['D11', 'Wildfire', 612321, 82422, 0, 'L1', 'T11', '2010-11-23'],
                        ['D12', 'Rain Storm', 31223, 52432, 12, 'L1', 'T12', '2010-12-24']
                    ];

                    var preMadeMeteor = [
                        ['M1', 20, 27, 14, 15, 'L1', 'T1'],
                        ['M2', 19, 26, 13, 16, 'L2', 'T2'],
                        ['M3', 18, 25, 12, 17, 'L3', 'T3'],
                        ['M4', 17, 28, 11, 18, 'L4', 'T4'],
                        ['M5', 16, 27, 10, 19, 'L5', 'T5'],
                        ['M6', 19, 26, 13, 15, 'L1', 'T6'],
                        ['M7', 18, 25, 12, 15, 'L1', 'T7'],
                        ['M8', 17, 24, 12, 15, 'L1', 'T8'],
                        ['M9', 17, 25, 12, 15, 'L1', 'T9']
                    ];

                    var preMadeTimes = [
                        ['T1', 2010, 1, 'January'],
                        ['T10', 2010, 4, 'October'],
                        ['T11', 2010, 4, 'November'],
                        ['T12', 2010, 4, 'December'],
                        ['T13', 2011, 1, 'January'],
                        ['T14', 2011, 1, 'February'],
                        ['T15', 2011, 1, 'March'],
                        ['T16', 2011, 2, 'April'],
                        ['T17', 2011, 2, 'May'],
                        ['T18', 2011, 2, 'June'],
                        ['T19', 2011, 3, 'July'],
                        ['T2', 2010, 1, 'February'],
                        ['T20', 2011, 3, 'August'],
                        ['T3', 2010, 1, 'March'],
                        ['T4', 2010, 2, 'April'],
                        ['T5', 2010, 2, 'May'],
                        ['T6', 2010, 2, 'June'],
                        ['T7', 2010, 3, 'July'],
                        ['T8', 2010, 3, 'August'],
                        ['T9', 2010, 3, 'September'],
                        ['T21', 2011, 3, 'September'],
                        ['T22', 2011, 4, 'October'],
                        ['T23', 2011, 4, 'November'],
                        ['T24', 2011, 4, 'December'],
                        ['T25', 2012, 1, 'January'],
                        ['T26', 2012, 1, 'February'],
                        ['T27', 2012, 1, 'March'],
                        ['T28', 2012, 2, 'April'],
                        ['T29', 2012, 2, 'May'],
                        ['T30', 2012, 2, 'June'],
                        ['T31', 2012, 3, 'July'],
                        ['T32', 2012, 3, 'August'],
                        ['T33', 2012, 3, 'September'],
                        ['T34', 2012, 4, 'October'],
                        ['T35', 2012, 4, 'November'],
                        ['T36', 2012, 4, 'December'],
                        ['T37', 2013, 1, 'January'],
                        ['T38', 2013, 1, 'February'],
                        ['T39', 2013, 1, 'March'],
                        ['T40', 2013, 2, 'April']
                    ];
                    var db = window.sqlitePlugin.openDatabase("weather-app-proper", "1.0", 'Demo', 65536);

                    db.transaction(function(tx) {
                        tx.executeSql("delete from locations");
                        for (var i = 0; i < preMadeLoc.length; i++) {
                            db.transaction(execLoc(preMadeLoc[i]));
                        }

                        function execLoc(sqls) {
                            return function(tx) {
                                tx.executeSql('insert into locations (id, name, province, topography, classification, land_area, population, population_density, code) values(?, ?, ?, ?, ?, ?, ?, ?, ?)', sqls, function(tx, res) {
                                    console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");
                                    console.log(sqls);
                                });
                            };
                        }
                    });

                    db.transaction(function(tx) {
                        tx.executeSql("delete from disasters");
                        for (var i = 0; i < preMadeDisaster.length; i++) {
                            db.transaction(execDis(preMadeDisaster[i]));
                        }

                        function execDis(sqls) {
                            return function(tx) {
                                tx.executeSql("insert into disasters(id, type, cost_infrastructure, cost_agriculture, cost_human_lives, L_ID, T_ID, DDate) values(?, ?, ?, ?, ?, ?, ?, ?)", sqls, function(tx, res) {
                                    console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");
                                    console.log(sqls);
                                });
                            }
                        }
                    });
                    db.transaction(function(tx) {
                        tx.executeSql("delete from times");
                        for (var i = 0; i < preMadeTimes.length; i++) {
                            db.transaction(execTimes(preMadeTimes[i]));
                        }

                        function execTimes(sqls) {
                            return function(tx) {
                                tx.executeSql("insert into times(id, TYear, TQuarter, TMonth) values(?, ?, ?, ?)", sqls, function(tx, res) {
                                    console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");
                                    console.log(sqls);
                                });
                            };
                        }
                    });
                    db.transaction(function(tx) {
                        tx.executeSql("delete from meteorological");
                        for (var i = 0; i < preMadeMeteor.length; i++) {
                            db.transaction(execMeteor(preMadeMeteor[i]));
                        }

                        function execMeteor(sqls) {
                            return function(tx) {
                                tx.executeSql("insert into meteorological(id, average_precipitation, average_temperature, average_humidity, average_wind_speed, L_ID, T_ID) values(?, ?, ?, ?, ?, ?, ?)", sqls, function(tx, res) {
                                    console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");
                                    console.log(sqls);
                                });
                            }
                        }
                    });
                    alert("Syncing and Reset is Done!");
                }).fadeIn(200);
            });

        }
    });
});