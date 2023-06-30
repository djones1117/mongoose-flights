const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
     enum: ['Delta', 'American', 'Southwest']
    },
    airport: {
        type: String,
      enum: ['LAX', 'SNA', 'DEN']  
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999,
     },
    departs: {
        type: Date,
    }, 
});

