const sql = require('mssql')
const config = {
    user: 'karan',
    password: 'karan1234',
    server: 'karandbinstance.czasqvf9b39w.us-east-2.rds.amazonaws.com', // You can use 'localhost\\instance' to connect to named instance
    database: 'stayhealthyworld',
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

module.exports = {
  sql, poolPromise
}