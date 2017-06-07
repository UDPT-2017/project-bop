// app/routes.js

var express  = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');

module.exports = function(app, passport) {
	var homecontroller = require('../app/controllers/HomeController');
	var loginController = require('../app/controllers/LoginController');
  var informationcontroller = require('../app/controllers/InformationController');
 	var aboutcontacController = require('../app/controllers/About_Contact_Controller');
	var express  = require('express');
	app.use(express.static("public"));
	//app.use(express.static("views"));
	//app.set('view engine', 'ejs');
	app.use('/components',express.static('bower_components'));

	app.engine('hbs', exphbs({
	  extname: '.hbs',
		defaultLayout: 'application',
	  layoutsDir: path.resolve('./app/views/layouts/'),
	  partialsDir: path.resolve('./app/views/partials')
	}));

	app.set('view engine', 'hbs');
	app.set('views', path.resolve('././app/views'));

	app.get('/', homecontroller.index);
		// =====================================
		// HOME PAGE (with login links) ========
		// =====================================
		/*app.get('/', function(req, res) {
			res.render('index.ejs'); // load the index.ejs file
		});*/


    app.get('/information', informationcontroller.information);
    app.get('/shipping_address', informationcontroller.shipping_address);
    app.get('/list_products_auctioned', informationcontroller.list_products_auctioned);
    app.get('/list_products_follows', informationcontroller.list_products_follows);
    app.get('/list_products_auction', informationcontroller.list_products_auction);


    app.get('/about', aboutcontacController.about);

    app.get('/contact', aboutcontacController.contact);

    // LOGIN ===============================
  	// =====================================
  	// show the login form
  	app.get('/login', Logged, loginController.formLogin);

  	// process the login form
  	app.post('/login', loginController.login);


  	app.get('/signup', loginController.formSignup);


  	// process the signup form
  	app.post('/signup', passport.authenticate('local-signup', {
  		successRedirect : '/', // redirect to the secure profile section
  		failureRedirect : '/signup', // redirect back to the signup page if there is an error
  		failureFlash : true // allow flash emailbox
  	}));


		// =====================================
		// PROFILE SECTION =========================
		// =====================================
		// we will want this protected so you have to be logged in to visit
		// we will use route middleware to verify this (the isLoggedIn function)


		// =====================================
		// LOGOUT ==============================
		// =====================================
		app.get('/logout', function(req, res) {
			req.logout();
			res.redirect('/');
		});
};

// route middleware to make sure
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}
function Logged(req, res, next) {

	// if user isnt authenticated in the session, carry on
	if (!req.isAuthenticated())
		return next();

	// if they are redirect them to the home page
	res.redirect('/');
}
