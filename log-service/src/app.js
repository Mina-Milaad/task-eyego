const express = require('express');
const app = express();
const logRoutes = require('./modules/logs/routes');
const consumer = require('./infrastructure/kafka/consumer');
require('dotenv').config();
require('./infrastructure/mongo/mongo');

app.use(express.json());
app.use('/logs', logRoutes);

consumer.run();

app.listen(4000, () => {
    console.log('Log service listening on port 4000');
});