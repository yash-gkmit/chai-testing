const express = require('express');
require('dotenv').config();
const app = express();
const calculatorRoutes = require('./routes/calculatorRoutes');


const port = process.env.PORT||4400;

app.use(express.urlencoded({extended: true}));

app.use('/calculator', calculatorRoutes);

app.listen(port, () => {
    console.log(`Calculator app listening at http://localhost:${port}`);
});

module.exports = app;


