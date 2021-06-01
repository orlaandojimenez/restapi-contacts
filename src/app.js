const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

//connecting to db
mongoose.connect('mongodb://localhost/crud-contacts')
    .then(db => console.log('Db connected'))
    .catch(err => console.log(err));

//importing routes
const indexRoutes = require('./routes/index');

//settings
app.set('port',process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));

//routes
app.use('/',indexRoutes);
app.use(express.urlencoded({extended: false}));

//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});