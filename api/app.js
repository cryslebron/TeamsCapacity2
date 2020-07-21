const express = require('express')
const routes = require('./routes/index')
const sequelize = require('./util/database')

const app = express()
 
const port = process.env.PORT || 3001

app.use('/api', routes.security)
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

sequelize
    .sync()
    .then(result => {
        console.log(result);
        app.listen(port, () => console.log(
            `Express started in ${app.get('env')} mode at http://localhost:${port}; ` +
            `press Ctrl-C to terminate`
        ))
    })
    .catch(err => {
        console.log(err);        
    })