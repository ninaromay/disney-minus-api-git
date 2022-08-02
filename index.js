console.clear();

/* 
    npm init -y
    npm i express cors nodemon morgan mongoose
*/

// 1 - Importar
const express = require('express');
const cors = require('cors');
const { router } = require('./router');
const morgan = require('morgan');
const mongoose = require('mongoose');
let url = process.env.PORT ? 'mongoatlass' : 'mongodb://localhost:27017/disney_minus_api' 

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})  .then( () => {console.log('Conectado a mongoose');} )
    .catch(err => console.log(err))

// 2 - App
const app = express();

// let folder
// let specific

// 3 - Api express
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended : false }))
app.use(router);

// 4 - Api functions get
// 

//IN ROUTER

// app.get(`/${folder}`, (req, res) => {
//     let condition = bbdd.length !== 0
//     let data = bbdd.filter( bd => bd.specific === specific)
//     let status = condition ? 200 : 204
//     let error = condition ? 'All ok' : 'No'
//     let response = { data, status, error }

//     res.status(200).json(response)
// })

let puerto = process.env.PORT || 3005

// Api listen to port
app.listen(puerto, ()=>{
    console.log('Initializing Disney Minus Api');
})