// Import the connection file at the top of your seed
const mongoose = require('./connection')
const data = require('./photos.json')

// Then, import your model seperately
const Photo = require('../models/Photo')

// write our seed file
// Delete our original content first
Photo.deleteMany({}).then( () => {
    // console.log(bookmarks)})
    Photo
    .create(data)
    .then( photo => {
        console.log("Created: ", photo)
        process.exit()
    })
    .catch( (err) => {
        console.log('AAAUUUUGGGGHHHHH', err)
    })
})

// Extra note for commit