const express = require('express');
const path = require('path');
const config = require('./config');
const app = express();
let swaggerSpecsSources = require('./spec-sources');
swaggerSpecsSources = JSON.stringify(swaggerSpecsSources, null, 4);
const port = 9000;
app.use(express.static(__dirname + '/'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
    next();
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.get('/', function (req, res) {
    res.render('index', {
        'title': "Swagger UI",
        'description': "This is Home page.",
        'datasrc': swaggerSpecsSources
    });
});
console.log('Swagger browser is accessible at port ' + port);
app.listen(port);