const express = require('express');
const app = express();
const authRoutes = require('./modules/auth/routes');
require('dotenv').config();

app.use(express.json());
app.use('/auth', authRoutes);

app.listen(3000, () => {
    console.log('Auth service listening on port 3000');
});
