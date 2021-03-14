const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./src/app/control/routes')

const server = express()

server.use(express.static('public'))
server.use(routes)
server.set('view engine', 'njk')

nunjucks.configure('src/app/views', {
    express: server,
    noCache: true,
    autoescape: false
})

server.listen(1000, ()=> {
    console.log('Server Run')
})