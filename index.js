const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/translate', async (req, res) => {
  try {
    const event = req.body;
    console.log('Event received:', event);
    
    // Подтверждаем получение
    res.json({ 
      action: 'continue'
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal error' });
  }
});

app.get('/', (req, res) => {
  res.send('SignalWire Translation Webhook Running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
