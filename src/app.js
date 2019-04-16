// imports
const express	= require('express'); // npm run dev || npm start
const app 		= express();
const morgan 	= require('morgan');
const mongoose 	= require('mongoose'); // sudo mongod --dbpath ./data/db --port 27017 
const path 		= require('path');
const bodyParser= require('body-parser');

// settings
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('PORT', process.env.PORT || 8080);

// conexion DB
mongoose.connect('mongodb://localhost/crud-express-mongodb', { useNewUrlParser: true })
		.then( db => console.log('Conexion db OK!')) 
		.catch(stacktrace => console.log(stacktrace))

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));// pa que pesque el req.body :/
app.use('/', require('./routes/index-routes'));


// server
app.listen(app.get('PORT'), () => {
	console.log('escuchando por el puerto '+ app.get('PORT') +'...');
});
