const express = require('express');
const mongoose = require('mongoose');
const schoolRoutes = require('./api/routes/school');
const app = express();

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/schoolpediaDB',
    { useNewUrlParser: true,
        useUnifiedTopology: true ,  useFindAndModify: false })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB echouée'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//const routes=require('./api/routes/countryRoutes');
const routes=require('./api/routes/userRoutes');
routes(app);
//routes(app);

module.exports = app;
