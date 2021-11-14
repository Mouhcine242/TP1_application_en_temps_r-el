const mongoose = require('mongoose');

const userScema = new mongoose.Schema({
    name : {
        type : 'string',
        required : true
    },
    password : {
        type : 'string',
        required : true
    }
});

module.exports = mongoose.model('myuser', userScema);


