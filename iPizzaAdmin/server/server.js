const express       = require('express');
const path          = require('path');
const app           = express();
const publicPath    = path.join(__dirname, '../public');
const port          = process.env.PORT || 3031;

app.use(express.static(publicPath));
app.get('*', (request, response) => {
    response.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Admin Server is up. Serving on http://localhost:${port}`);
});