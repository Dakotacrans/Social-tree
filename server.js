const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// In-Memory / SQLite persistent store abstraction for quick deployment
console.log('Social Tree Server initialized on port ' + PORT);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', name: 'Social Tree', version: '1.0.0' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🌲 Social Tree is running on http://localhost:${PORT}`);
});
