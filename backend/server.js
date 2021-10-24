
const express = require("express");
const dotenv = require('dotenv');
// old syntax ^

const app = express();
dotenv.config({path:'.env'})
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.send('task kanban')
})

app.listen(port, () => {console.log(`Server running on http://localhost:${port}`)});