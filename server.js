const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World desde Express y Docker!'));
app.get('/saludo', (req, res) =>
  res.json({ mensaje: 'Hola, Sistemas Operativos', curso: 'Clase 15' }),
);
app.get('/items', (req, res) =>
  res.json({ id: '1234', name: 'ihpone 18 pro max', value: 5300000 }),
);

app.listen(PORT, '0.0.0.0', () =>
  console.log(`Servidor escuchando en puerto ${PORT}`),
);
