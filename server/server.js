const path = require('path')
const express = require('express')

const server = express()

const port = process.env.PORT || 3000

server.use(express.static(path.join(__dirname, 'public')))

module.exports = server
