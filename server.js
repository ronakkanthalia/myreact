const express = require('express');
var serveStatic = require('serve-static')
const path = require('path');

const PORT = 3000;
const app = express();

app.use(serveStatic(path.join(__dirname, 'build'), {
    index: false
}))

app.get('*', (req, res) => {
    return res.sendFile(path.join(`${__dirname}/build/index.html`));
});

app.listen(PORT, () => {
    console.log('Application started. Press Ctrl+C to quit');
});
