const mongoose = require('mongoose');
const config = require('config'); //grabs mongoURI from default.json
const db = config.get('mongoURI');// grabs global variables

const connectDB = async () => { // when use mongoose methods it returns a promise
    try {
        await mongoose.connect(db, { // takes in the connection string
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB; // run this in the index.js file