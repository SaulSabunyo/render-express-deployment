const express = require('express');
const app = express();// Initialize Express application
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Thanks for connecting to my Channel!')
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})