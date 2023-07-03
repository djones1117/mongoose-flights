const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;


const reviewSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  }
}, {
  timestamps: true
});







const flightSchema = new mongoose.Schema({
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
     reviews: [reviewSchema],
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
module.exports = mongoose.model('Flight', flightSchema);

