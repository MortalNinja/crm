const sql = require("mssql/msnodesqlv8");

var config = {
    server :"DESKTOP-O265V68\\SQL_VKR",
    database :"CRM_DB",
    driver :"msnodesqlv8",
    options :{
        trustedConnection:true
    }
}

sql.connect(config, function(err) {
    if(err)console.log(err);
    var request = new sql.Request();
    request.query("SELECT * FROM Company", function(err,records) {
        if(err)console.log(err);
        else console.log(records)
    })
})
