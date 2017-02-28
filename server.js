/*// server.js

    // set up ========================
    var express  = require('express');
    var app      = express();                               // create our app w/ express
    var morgan = require('morgan');             // log requests to the console (express4)
    var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
    var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

    // configuration =================



    app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());

    // listen (start app with node server.js) ======================================
    app.listen(8080);
    console.log("App listening on port 8080");*/



//=======================================================================================
var express = require("express");
var app = express();
var router = express.Router();
var bodyParser = require("body-parser");
var pause = require('connect-pause');
var path = __dirname + '/views/';
var path1 = __dirname + '/views/javascripts/';

console.log("----Directory Name------"+__dirname);

app.use(express.static('./views'));

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});


router.get("/home",function(req,res){
  res.sendFile("index.html", { root: 'views' });
});

router.get("/main",function(req,res){
  res.sendFile("/pages/loginPage.html", { root: 'views' });
});

router.get("/main/dashboard",function(req,res){
  res.sendFile("/pages/dashboardPage.html", { root: 'views' });
});


router.get("/dashboard",function(req,res){
  res.sendFile("/pages/dashboardPage.html", { root: 'views' });
});

router.get("/assets/css/img/backgrounds/background-photo.jpg",function(req,res){
  res.sendFile("/assets/img/backgrounds/background-photo.jpg", { root: 'views' });
});



router.get("/loginPage.html",function(req,res){
  res.sendFile("/pages/loginPage.html", { root: 'views' });
});


router.get("/dashboardPage.html",function(req,res){
  res.sendFile("/pages/dashboardPage.html", { root: 'views' });
});





router.post('/data',pause(2000), function(req,res){
    res.sendFile("/json/data.json",{ root: 'views' });
    //
	/*res.json([{"id": 1, "name": "Mymm", "city": "Pantano do Sul"},
        {"id": 2, "name": "Skyble", "city": "Guilmaro"},
        {"id": 3, "name": "Tagfeed", "city": "Gnosjö"},
        {"id": 4, "name": "Realcube", "city": "Jrashen"},
        {"id": 5, "name": "Bluejam", "city": "Zhangjiawo"},
        {"id": 6, "name": "Jayo", "city": "Obonoma"},
        {"id": 7, "name": "Cogidoo", "city": "Sungsang"},
        {"id": 8, "name": "Avavee", "city": "Diawara"},
        {"id": 9, "name": "Tagtune", "city": "Monywa"},
        {"id": 10, "name": "Centimia", "city": "Retkovci"}]);*/
        console.log("test"+res.body);
});
router.get("/javascripts/app.js",function(req,res){
  res.sendFile("/javascripts/app.js",{ root: 'views' });
});


router.get("/pages/termsandCond",function(req,res){
  res.sendFile("/pages/termsandCond.html",{ root: 'views' });
});


router.get("/lib/angular.min.js",function(req,res){
  res.sendFile("/lib/angular.min.js",{ root: 'views' });
});

router.get("/lib/angular-ui-router.min.js",function(req,res){
  res.sendFile("/lib/angular-ui-router.min.js",{ root: 'views' });
});

router.get("/config/config.js",function(req,res){
  res.sendFile("/config/config.js",{ root: 'views' });
});

router.get("/controller/loginPage.js",function(req,res){
  res.sendFile("/controller/loginPage.js",{ root: 'views' });
});

router.get("/controller/homePage.js",function(req,res){
  res.sendFile("/controller/homePage.js",{ root: 'views' });
});

router.get("/controller/dashboardController.js",function(req,res){
  res.sendFile("/controller/dashboardController.js",{ root: 'views' });
});


/*router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});*/

app.use("/",router);

/*app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());*/

/*app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});*/

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
