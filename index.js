const express = require('express');
const OpenAI = require('openai');
const app = express();

app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post('/translate', async (req, res) => {
  try {
    const event = req.body;
    console.log('Received:', JSON.stringify(event, null, 2));
    
    // Для live_translate просто подтверждаем
    // SignalWire сам обрабатывает STT->Translate->TTS
    res.json({ 
      action: 'continue'
    });
    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/', (req, res) => {
  res.send('Webhook running!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
