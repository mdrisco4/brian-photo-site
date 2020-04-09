const router = require('express').Router();
let Photo = require('../models/photo.model');

router.route('/').get((req, res) => {
    Photo.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    // Did Not Set Up Schema
    const title = req.body.title;
    const category = req.body.category;

    const newPhoto = new Photo({
        title,
        category
    });

    newPhoto.save()
        .then(() => res.json('Photo added!'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = Photos;