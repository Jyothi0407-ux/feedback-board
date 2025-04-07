const express = require('express');
const app = express();
const PORT = 3000;

let feedbacks = [];

app.use(express.static('public'));
app.use(express.json());

app.get('/feedbacks', (req, res) => {
  res.json(feedbacks);
});

app.post('/feedbacks', (req, res) => {
  const { name, message } = req.body;
  if (name && message) {
    feedbacks.push({ name, message });
    res.status(201).json({ status: 'ok' });
  } else {
    res.status(400).json({ status: 'error' });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
