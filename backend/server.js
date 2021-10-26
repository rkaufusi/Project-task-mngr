// ES6 import syntax
import express from 'express';
// express 4.16+ doesnt need bodyparser
//import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import taskRoutes from './routes/tasks.js'


const app = express();

// express middlewear, every task from taskRoutes starts with /tasks
//localhost:5000/tasks
app.use('/tasks', taskRoutes)
// old syntax app.use(bodyParser.json())
app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
// using this for now instead of dotenv
const CONNECTION_URL = 'mongodb+srv://TaskMNGR:DWPxx497@cluster0.pjhrt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000
// mongoose.connect(url, {object of certain things, not required})
mongoose.connect(CONNECTION_URL,  {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));

// once connect to the db can start creating routes for backend new folder "routes"




// depreciated mongoose.set('useFindAndModify', false);
// .then if connection. else. .catch (promise syntax, kinda like an if else)
/*
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
*/
