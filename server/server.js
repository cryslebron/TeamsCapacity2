const express = require('express')
const routes = require('./routes/index')
const app = express()
const port = process.env.PORT || 3001;

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/api/team', routes.teams)

app.use((req, resp) => {
    resp.type('text/plain')
    resp.status(404)
    resp.send('404 - Not Found')
})

app.use((err, req, res, next) => {
    console.error(err.message)
    res.type('text/plain')
    res.status(500)
    res.send('500 - Server Error')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
