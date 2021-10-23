import app from './server.js'
import mongodb from 'mongodb'
import dotenv from 'dotenv'
import RestaurantDAO from './dao/restaurantsDAO.js'
import ReviewsDAO from "./dao/reviewsDAO.js"
import TasksDAO from './dao/tasksDAO.js'
dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

MongoClient.connect(
    process.env.TASKLIST_DB_URI,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true,
    }
    )
    .catch(err => {
        console.error(err.stack)
        process.exit(1)
    })
    .then(async client => {
        await RestaurantDAO.injectDB(client)
        await ReviewsDAO.injectDB(client)
        await TasksDAO.injectDB(client)
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    })