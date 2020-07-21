const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes/index')
const sequelize = require('./util/database')

const app = express()
const port = process.env.PORT || 3000
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors())
app.use('/api', routes.security)
app.use('/api/team', routes.teams)
app.use('/api/employee', routes.employees)
app.use('/api/sprint', routes.sprints)
app.use('/api/user', routes.users)

app.use((req, resp) => {
    resp.status(404).send('404 - Not Found')
})

app.use((err, req, res, next) => {
    if (err) {
        console.error(err.message)
        res.status(500).send(err)
    }
})


const initDb = function(sequelize) {
    // if (app.get('env') === 'development') {
    //     return sequelize.sync({ force: true })
    // }
    return sequelize.authenticate()
}

initDb(sequelize)
    .then(result => {
        app.listen(port, () => console.log(
            `Express started in ${app.get('env')} mode at http://localhost:${port}; ` +
            `press Ctrl-C to terminate`
        ))
    })
    .catch(err => {
        console.log(err);        
    })