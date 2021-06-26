const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Country = require('./api/models/countryModel'),
    School=require('./api/models/school')//created model loading here
    bodyParser = require('body-parser');
const fileUpload=require('express-fileupload');
const cvtojson=require('csvtojson');
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/SchoolpediaDB',
    { useNewUrlParser: true,
        useUnifiedTopology: true }
    ).then(() => console.log('Connexion à MongoDB réussie !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



const routes = require('./api/routes/countryRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('schoolpedia RESTful API server started on: ' + port);




// const http = require('http');
// const app = require('./app');
//
// const normalizePort = val => {
//     const port = parseInt(val, 10);
//
//     if (isNaN(port)) {
//         return val;
//     }
//     if (port >= 0) {
//         return port;
//     }
//     return false;
// };
// const port = normalizePort(process.env.PORT || '3000');
// app.set('port', port);
//
// const errorHandler = error => {
//     if (error.syscall !== 'listen') {
//         throw error;
//     }
//     const address = server.address();
//     const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
//     switch (error.code) {
//         case 'EACCES':
//             console.error(bind + ' requires elevated privileges.');
//             process.exit(1);
//             break;
//         case 'EADDRINUSE':
//             console.error(bind + ' is already in use.');
//             process.exit(1);
//             break;
//         default:
//             throw error;
//     }
// };
//
// const server = http.createServer(app);
//
// server.on('error', errorHandler);
// server.on('listening', () => {
//     const address = server.address();
//     const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
//     console.log('Listening on ' + bind);
// });
//
// server.listen(port);
