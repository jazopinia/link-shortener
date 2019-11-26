const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortid = require('shortid');
const config = require('config'); //for the base url

const Url = require('../models/Url');

// @route   POST /api/url/shorten
// @desc    Create short URL

router.post('/shorten', async (req, res) => {
    const {longUrl} = req.body; //pulls in url from the client
    const baseUrl = config.get('baseUrl');// 

    //Check base url code
    if (!validUrl.isUri(baseUrl)) { //is Uri checks if url is valid
        return res.status(401).json('Invalid base url');
    }

    // Create url code
    const urlCode = shortid.generate();

    // Check if the long url is valid
    if(validUrl.isUri(longUrl)) {
        try {
            let url = await Url.findOne({ longUrl }); // Check if the long url is already in the database

            if(url) {
                res.json(url); // returns the url if already in database
            } else { // Creates short url
                const shortUrl = baseUrl + '/' + urlCode;

                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                });

                await url.save(); // saves url to the database

                res.json(url); // responds to the url
              } 

            } catch (err) {
                console.error(err);
                res.status(500).json('Server error');
        } 

        } else { // if long url is not valid
            res.status(401).json('Invalid url');
    }
});

module.exports = router;