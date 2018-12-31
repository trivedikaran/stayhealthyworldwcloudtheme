const express = require('express');
const router = express.Router();
const {
  sql,
  poolPromise
} = require('./db');
var passwordHash = require('password-hash');

router.get('/GetUserList', async (req, res) => {
  try {

    const pool = await poolPromise;
    const result = await pool.request()
      .input('UserId', sql.Int, req.query.UserId)
      .execute('GetAllUser', (err, result) => {
        res.json(result.recordset);
      });
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
});


router.post('/CheckUserLogin', async (req, res) => {
  try {
    const pool = await poolPromise;
    const request = await pool.request();

    request.input('Email', sql.VarChar, req.body.email);
    request.input('Password', sql.NVarChar, encrypt(req.body.password));

    const result = request.execute('CheckUserLogin', (err, result) => {
      res.json(result);
    });
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
});

module.exports = router
