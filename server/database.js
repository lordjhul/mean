const mongoose =require('mongoose');

const URI ='mongodb://localhost/mean-crud';

mongoose.connect(URI)
    .then(db=>console.log('DB is coneted'))
    .catch(err=> console.error(err));

module.exports =mongoose;