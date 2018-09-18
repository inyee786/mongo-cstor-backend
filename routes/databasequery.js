const mongo = require('../config/dbconnection');
const express = require('express');
const randomString = require('randomstring');
const url = require('url')
const router = express();


// create mongoose schema
const personSchema = new mongo.Schema([{
    name: String,
    email: String,
    age: Number,
    rNumber: Number
}]);

// create mongoose model
const User = mongo.model('person', personSchema);



/* GET all users. */
router.get('/read/:rNumber', (req, res) => {
    // console.log(req);
    // {rNumber: req.params.rNumber}
    User.find({rNumber: req.params.rNumber}, (err, users) => {
        if (err) res.status(500).send({ message: err, status: 500 })
        console.log('this is user api');
        console.log(users);
        res.status(200).json({ u: users, status: 200, message: "Done all the reading" });
    });
});

router.get('/read', (req, res) => {
    User.find({}, (err, users) => {
        if (err) res.status(500).send(error)
        console.log('this is user api');
        // console.log(users);
        res.status(200).json(users);
    });
});

// /* Create a user. */
// router.post('/save', (req, res) => {
//     let user = new User({
//         name: req.body.name,
//         email: req.body.email,
//         age: req.body.age,
//         rNumber: req.body.rNumber
//     });
//     // console.log(user);
//     user.save(error => {
//         if (error) res.status(500).send(error);

//         res.status(201).json({status: 200, message: "Data is saved"});
//     });
// });

//add 100 data 
router.post('/save', (req, res) => {
    User.collection.insert(req.body, function (err, doc) {
        if (err) {
            return res.status(500).json({ message: err, status: 500 })
        } else {
            res.status(201).json({ status: 200, message: "Data is saved" });
        }
    })
});


module.exports = router;
