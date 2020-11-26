const express = require('express')
const app = express()
const PORT = 3000
const cors = require('cors')
const routes = require('./routes/index')

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/', routes)

app.listen(PORT, () => {
    connsole.log(`server is running on http://localhost:${PORT}`)
})