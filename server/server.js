import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import menuRoutes from './routes/menuRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/menu', menuRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
