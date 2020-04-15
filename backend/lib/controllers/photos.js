// Controller will relate to a specific model
// So you wnat to import the model here
// Note = you can haev multipkle models within one controller
const Photo = require('../models/Photo')

module.exports = {
    // Inside each controller method you are defining the logic of your app,
    // each 'endpoint' will contain specific instructions on what data
    // should be displayed
    index: (req, res) => {
        Photo.find({}).then(photoss => {
            res.json(photoss)
        })
    },
    // extra example methods that could be added
    // create: (req, res) => {},
    // show: (req, res) => {},
    // delete: (req, res) = {}
}