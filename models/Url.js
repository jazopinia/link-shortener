const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema ({//takes in object of the fields needed for the linker
    urlCode: String, // to find the data and to concatenate the short url at the end of the base url
    longUrl: String,
    shortUrl: String,
    date: { type: String, default: Date.now }
});

module.exports = mongoose.model('Url', urlSchema);