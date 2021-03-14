const express = require('express')
const routes = express.Router()
const data = require('./data')



routes.get('/', data.index )
routes.get('/project/:id', data.projects )

module.exports = routes
