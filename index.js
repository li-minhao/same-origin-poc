const express = require('express');
const path = require('path');
const app = express();
const port = 9000;

app.use(express.static('public'));

app.get('/main.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'main.html'));
});

app.get('/embeded.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'embedded.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// =====================================================

const anotherApp = express();
const anotherPort = 9001;

anotherApp.use(express.static('another_public'));

anotherApp.get('/embedded.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'another_public', 'embedded.html'));
});

anotherApp.listen(anotherPort, () => {
  console.log(`Another server running at http://localhost:${anotherPort}/`);
});
