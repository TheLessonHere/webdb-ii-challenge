
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          vin: "Sample VIN",
          make: "Nissan",
          model: "Altima",
          mileage: 200000,
          transmission: "automatic",
          title_status: "clean"
        },
        {
          vin: "Sample VIN",
          make: "Ford",
          model: "F150",
          mileage: 100000,
          transmission: "automatic",
          title_status: "clean"
        }
      ]);
    });
};
