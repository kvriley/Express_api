var sql = require("mssql");

const users = () => {

    return new Promise(function (resolve, reject) {

        var config = {
        "user": 'kvriley',
        "password": 'kv1234',
        "server": 'KevinsPC\\SQLEXPRESS',
        "database": 'UserInfo'
        };
    
        sql.connect(config).then(pool => {    
        pool.request()
            .query('select * from UserProfile', (err, result) => {
            sql.close();
            resolve(result);
            })
    
        });
    });
  }
  
  module.exports = users;
