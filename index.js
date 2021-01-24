const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const path = require('path');

const PORT = process.env.PORT || 5000;

//Middlewares
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

//Routes

//GET ALL
/* app.get('/names', async (req, res) => {
  try {
    const results = await pool.query(
      'SELECT * FROM names ORDER BY amount DESC'
    );
    res.status(200).json({
      status: 'success',
      results: results.rows.length,
      data: results.rows,
    });
  } catch (err) {
    console.log(err.message);
  }
}); */

//GET by Id(date)
app.get('/names/date/:asc', async (req, res) => {
  try {
    const ascDsc = req.params.asc;
    const query =
      ascDsc === 'ASC'
        ? 'SELECT * FROM names ORDER BY u_id ASC'
        : 'SELECT * FROM names ORDER BY u_id DESC';
    const results = await pool.query(query);
    res.status(200).json({
      status: 'success',
      results: results.rows.length,
      data: results.rows,
    });
  } catch (err) {
    console.log(err.message);
  }
});

//GET by Alphabeticaly
app.get('/names/alpha/:asc', async (req, res) => {
  try {
    const ascDsc = req.params.asc;
    const query =
      ascDsc === 'ASC'
        ? 'SELECT * FROM names ORDER BY name ASC'
        : 'SELECT * FROM names ORDER BY name DESC';
    const results = await pool.query(query);
    res.status(200).json({
      status: 'success',
      results: results.rows.length,
      data: results.rows,
    });
  } catch (err) {
    console.log(err.message);
  }
});

//GET by Amount
app.get('/names/amount/:asc', async (req, res) => {
  try {
    const ascDsc = req.params.asc;
    const query =
      ascDsc === 'ASC'
        ? 'SELECT * FROM names ORDER BY amount ASC'
        : 'SELECT * FROM names ORDER BY amount DESC';
    const results = await pool.query(query);
    res.status(200).json({
      status: 'success',
      results: results.rows.length,
      data: results.rows,
    });
  } catch (err) {
    console.log(err.message);
  }
});

//CREATE
app.post('/names', async (req, res) => {
  try {
    const { name, amount } = req.body;
    const results = await pool.query(
      'INSERT INTO names (name, amount) VALUES ($1, $2) RETURNING *',
      [name, amount]
    );
    res.status(201).json({
      status: 'success',
      data: results.rows[0],
    });
  } catch (err) {
    console.log(err.message);
  }
});

//UPDATE
/* app.put('/names/:id', async (req, res) => {
  try {
    const u_id = req.params.id;
    const { name, amount } = req.body;
    const results = await pool.query(
      'UPDATE names SET name = $1, amount = $2 WHERE u_id = $3 RETURNING *',
      [name, amount, u_id]
    );
    res.status(200).json(
      results.rowCount > 0
        ? {
            status: 'success',
            data: results.rows[0],
          }
        : {
            status: 'not found',
          }
    );
  } catch (err) {
    console.log(err.message);
  }
}); */

//DELETE
app.delete('/names/:id', async (req, res) => {
  try {
    const u_id = req.params.id;
    const results = await pool.query('DELETE FROM names WHERE u_id = $1', [
      u_id,
    ]);
    res.status(202).json(
      results.rowCount > 0
        ? {
            status: 'success',
            data: `Name with id: ${u_id} was deleted!`,
          }
        : {
            status: 'not found',
          }
    );
  } catch (err) {
    console.log(err.message);
  }
});

/* app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
}); */

app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});
