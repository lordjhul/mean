const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

const { mongoose} = require('./database');

//Settings
app.set('port', process.env.PORT || 3000);

// Middeewares
app.use(morgan('dev'));/////Mostrar en consola las peticiones desde el fronted
app.use(express.json());/////Entender el formato Json
app.use(cors({origin:'http://localhost:4200'}));

//Routes

app.use('/api/employees' ,require( './routes/employee.routes'));
//Starting Server

app.listen(app.get('port'), () =>{
    console.log('Server on port' , app.get('port'));
})