const express = require('express');
const router = express.Router();
const db = require('../data/db');

router.post('/', (req, res) => {
    const newCar = req.body;
    if (!newCar.vin || !newCar.make || !newCar.model || newCar.mileage === null) {
        res.status(400).json({ error: "VIN, Make, Model, and Mileage are required." });
    } else {
        db.addCar(newCar)
        .then(response => {
            console.log(response);
            res.status(201).json({ message: "New car added successfully." });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Server error adding new car." });
        });
    };
});

router.get('/', (req, res) => {
    db.getCars()
    .then(cars => {
        res.status(200).json(cars);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: "Server error getting cars." });
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.getCarById(id)
    .then(car => {
        if(car){
            res.status(200).json(car);
        } else {
            res.status(404).json({ error: "Car with the given id not found." });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: "Server error getting car by id." });
    })
});

module.exports = router;