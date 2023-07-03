const FlightModel = require('../models/flight');

module.exports = {
    index,
    show,
    new: newFlight,
    create
};


function newFlight(req, res) {
    // We'll want to be able to render an  
    // errorMsg if the create action fails
    res.render('flights/new', { airline: 'Add Airline', errorMsg: '' });
  }



  async function create(req, res) {
    // convert nowFlying's checkbox of nothing or "on" to boolean
    req.body.nowFlying = !!req.body.nowFlying;
    // remove any whitespace at start and end of cast
    req.body.airline = req.body.airline.trim();
    // split cast into an array if it's not an empty string - using a regular expression as a separator
    if (req.body.airline) req.body.airline = req.body.airline.split(/\s*,\s*/);
    // Remove empty properties so that defaults will be applied
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    try {




  const flightFromTheDatabase =  await FlightModel.create(req.body);// the await is waiting for the FlightModel to go to MongoDB ATLAS (our db) a
    //and put the contents form in the db, and come to the express server

    // if you want to see what you put in the database on your server
    console.log(flightFromTheDatabase)


       // Always redirect after CUDing data
    // We'll refactor to redirect to the movies index after we implement it
    res.redirect('/flights');  // Update this line
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render('flights/new', { errorMsg: err.message });
  }
} 