const db = require('./dbConfig');

function getCars() {
    return db('cars')
};

function getCarById(id) {
    return db('cars')
            .where({id})
            .first()
};

function addCar(car) {
    return db('cars')
            .returning([
                'id',
                'vin', 
                'make', 
                'model', 
                'mileage', 
                'transmission', 
                'title_status'])
            .insert(car)
            .then(id=> getCarById(id[0]))
};


module.exports = {
    getCars,
    getCarById,
    addCar
};