const db = require('../../data/dbConfig');

module.exports = {
   getAll() {
      return db('cars');
   },
   getById(id) {
      return db('cars').where('id', id).first();
   },
   create(car) {
      return db('cars').insert(car)
         .then(([id]) => {
            return db('cars').where('id', id).first();
         })
   }
}