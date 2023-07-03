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
     nowFlying: { type: Boolean, default: true }
    departs: {
        type: Number,
        default: function() {
            return new Date().getFullYear();
          },
          min: 2022
        }, {
           timestamps: true 
        }
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Movie', movieSchema);

