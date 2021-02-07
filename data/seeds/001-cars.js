
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: '65432154698745125', make: 'jeep', model: 'grand cherokee', mileage: '123000'},
        { VIN: '65432156544845125', make: 'chevy', model: 'malibu', mileage: '126540'},
        { VIN: '65321565646645125', make: 'ford', model: 'escape', mileage: '1230540'},
        { VIN: '65426487846585125', make: 'tesla', model: 'model y', mileage: '12400'},
        { VIN: '69875465132787875', make: 'chrysler', model: '300C', mileage: '134500'},
      ]);
    });
};
