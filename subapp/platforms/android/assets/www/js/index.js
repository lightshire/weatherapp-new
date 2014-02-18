require(['LocationModel', 'MeteorModel', 'DisasterModel', 'TimeModel'], function(LocationModel, MeteorModel, DisasterModel, TimeModel) {

    $(document).ready(function() {
        document.addEventListener('deviceready', onDeviceReady, false);
    });

    var db = null;

    function onDeviceReady() {
        db = window.sqlitePlugin.openDatabase("weather-app-proper", "1.0", 'Demo', 65536);

        db.transaction(function(tx) {

            // console.log(LocationModel.createTable() + ";");
            // console.log(MeteorModel.createTable() + ";");
            // console.log(DisasterModel.createTable() + ";");
            // console.log(TimeModel.createTable() + ";");
            try {
                tx.executeSql(LocationModel.createTable() + ";");
                tx.executeSql(MeteorModel.createTable()) + ";";
                tx.executeSql(DisasterModel.createTable() + ";");
                tx.executeSql(TimeModel.createTable() + ";");
            } catch (e) {
                console.log(e);
            }

        });
    }

    function setupDummyData(tx) {

    }

});