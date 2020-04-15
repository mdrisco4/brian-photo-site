// import your express library and your controller
// This will allow us to access a particular method and match it to a route
const express = require('../../node_modules/express')
const photosController = require('../controllers/photos')

// Access the express router, which comes with the library
const photosRouter = express.Router()

// Assign each key from my controller to a specific route
photosRouter.get('/', bookmarksController.index)

module.exports = photosRouter