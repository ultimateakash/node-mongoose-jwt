const mongoose = require('mongoose');
const config = require('../config/database.config');

mongoose.connect(config.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

const conn = mongoose.connection;

conn.on('error', () => console.error('Connection Error'));

conn.once('open', () => console.info('Connection to Database is successful'));

module.exports = conn;
