const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/exchanges', async (req, res) => {
  try {
    const response = await axios.get('https://criptoya.com/api/exchanges');
    res.json(response.data);
  } catch (error) {
    console.error('Error al obtener datos de la API:', error.message);
    res.status(500).send('Error al obtener datos de la API');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor intermedio escuchando en http://localhost:${PORT}`);
});