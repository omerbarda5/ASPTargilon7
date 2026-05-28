const express = require('express')
const app = express()
const articleRoutes = require('./routes/articles')

app.use(express.json())
app.use('/api/articles', articleRoutes)

app.listen(8080)