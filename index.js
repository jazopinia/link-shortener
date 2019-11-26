const express = require('express');
const connnectDB = require('./config/db');
const path = require('path');
const app = express();

// Connect to database
connnectDB();

app.use(express.json({ extended: false })); // used to accept json data into the api

// Define Routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url')); // post the shorten url

// Send this HTML 
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});
    
const PORT = 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));