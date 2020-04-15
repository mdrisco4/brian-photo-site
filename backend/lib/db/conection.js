const mongoose = require('mongoose')

mongoURL = "mongodb://localhost/brian-photos"

mongoose.Promise = Promise

// .connect takes two arguments, one is the path to the db
// the second argument is where you set the settings to your connection
mongoose.connect(mongoURL, { 
        useNewUrlParser: true,    
        useUnifiedTopology: true 
    })
    .then( feedback => console.log("Connected to DB") )
    .catch( error => console.log("It broke, here's why ", error) )

module.exports = mongoose