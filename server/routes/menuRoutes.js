import express from 'express';
import mysql from 'mysql';

const router = express.Router();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'restaurante'
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ' + err.stack);
    return;
  }
  console.log('Conexión a la base de datos exitosa');
});

router.get('/getMenuItems', (req, res) => {
  connection.query('SELECT nombre, imagen, categoria, ingredientes, precio FROM menu', (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

router.post('/contacto', (req, res) => {
  const { nombre, apellidos, correo, telefono, mensaje } = req.body;
  const query = 'INSERT INTO contactos (nombre, apellidos, correo, telefono, mensaje) VALUES (?, ?, ?, ?, ?)';

  connection.query(query, [nombre, apellidos, correo, telefono, mensaje], (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send('Contacto registrado exitosamente');
    }
  });
});

export default router;
