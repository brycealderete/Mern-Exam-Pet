
// replace products with whatever we are creating
let pets =require('../controllers/pets')
const { Aggregate } = require('mongoose')
module.exports=(app)=>{
    app.get('/api/pets',pets.index);
    app.get('/api/pets/:id', pets.getOne);
    app.post('/api/pets', pets.create);
    app.put('/api/pets/:id',pets.update);
    app.delete('/api/pets/:id',pets.delete);

}