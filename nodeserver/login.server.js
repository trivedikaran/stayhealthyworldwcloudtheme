const express = require('express');
const router = express.Router();
const {
  sql,
  poolPromise
} = require('./db');
var passwordHash = require('password-hash');

console.log("Hello Welcome Here....");

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


router.get('/GetDayList', async (req, res) => {
  try {
    const pool = await poolPromise;
    const request = await pool.request();

    const result = request.execute('GetDayList', (err, result) => {
      res.json(result);
    });
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
});


router.get('/GetMonthList', async (req, res) => {
  try {
    const pool = await poolPromise;
    const request = await pool.request();

    const result = request.execute('GetMonthList', (err, result) => {
      res.json(result);
    });
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
});

router.get('/GetYearList', async (req, res) => {
  try {
    const pool = await poolPromise;
    const request = await pool.request();

    const result = request.execute('GetYearList', (err, result) => {
      res.json(result);
    });
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
});


router.post('/RegisterUser', async (req, res) => {
  try {
    const pool = await poolPromise;
    const request = await pool.request();

    request.input('Firstname', sql.VarChar, req.body.firstname);
    request.input('Lastname', sql.VarChar, req.body.lastname);
    request.input('Email', sql.VarChar, req.body.emailAddress);
    request.input('Password', sql.NVarChar, encrypt(req.body.Password));
    request.input('Gender', sql.TinyInt, req.body.email);
    

    // const result = request.execute('RegisterUser', (err, result) => {
    //   res.json(result);
    // });
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
});



module.exports = router
