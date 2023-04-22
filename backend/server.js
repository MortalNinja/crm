const fs = require('fs'),
    http = require('http'),
    express = require ('express'),
    port = process.env.port || 8000;

const server = express();

server.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

server.set('view engine', 'ejs');

server.use('/public', express.static('public'));

server.get('/', function(req, res) {
    res.render('index');
});
server.get('/about', function(req, res) {
    res.render('about');
});
server.get('/tspage', function(req, res) {
    res.render('tspage');
});

server.listen(port, ()=>{
    console.log("connected to " +port);
});

server.get('/api', (req, res) => {
    res.json ({
        message: "Hi"
    })
})