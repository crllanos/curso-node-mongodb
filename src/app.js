// imports
const app 		= require('express')(); // npm run dev
const morgan 	= require('morgan');
const routes 	= require('./routes/index');
const mongoose 	= require('mongoose'); // sudo mongod --dbpath ./data/db --port 27017 

// settings
app.set('views', './views');
app.set('view engine', 'ejs');
app.set('PORT', process.env.PORT || 8080);

// conexion DB
mongoose.connect('mongodb://localhost/crud-express-mongodb')
		.then(db => console.log('Conexion db OK!'))
		.catch(pifia => console.log(pifia))

// middlewares
app.use(morgan('dev'));
app.use('/', routes);


// server
app.listen(app.get('PORT'), () => {
	console.log('escuchando por el puerto '+ app.get('PORT') +'...');
});