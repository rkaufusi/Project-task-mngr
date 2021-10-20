import express from 'express'
import cors from 'cors'
import tasklist from './api/tasklist.route.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use("./api/v1/tasklist", tasklist)
app.use("*", (req, res) => res.status(404).json({error: "not found"}));

export default app