import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
/*
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan')
const bodyparser = require('body-parser')
const path = require('path');
// old syntax ^ npm install morgan */

const app = express();
dotenv.config({path:'.env'})
const port = process.env.PORT || 8080

// morgan logs request when made.
app.use(morgan('tiny'));

//parse request to body parser
app.use(bodyparser.urlencoded({extended:true}))

// set view engine ? react. check folder
app.set('view engine', 'react') 
app.set('views', path.resolve(__dirname, 'views(folder where view is)'))

// load asset will change
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
// css/style.css 


// app.get(path, callback)
app.get('/', (req, res) => {
  res.send('task kanban')
})
// app.listen([port[, host[, backlog]]][, callback])
app.listen(port, () => {console.log(`Server running on http://localhost:${port}`)});

