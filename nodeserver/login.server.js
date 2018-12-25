const express = require('express');
const router = express.Router();
const {
  sql,
  poolPromise
} = require('./db');

console.log("Heellllooo");

router.get('/GetUserList', async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('UserId', sql.Int, null)
      .execute('GetAllUser', (err, result) => {
        res.json(result.recordset);
      });
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
});

module.exports = router
