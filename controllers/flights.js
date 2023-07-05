const FlightModel = require('../models/flight');

module.exports = {
    index,
    show,
    new: newFlight,
    create
};


async function index(req, res) {
    const flights = await FlightModel.find({});
    console.log(flights)
    res.render('flights/index', { title: 'All Flights', flights:flights });
  
}

async function show(req, res) {
    const flight = await FlightModel.findById(req.params.id);
    res.render('flights/show', { title: 'Flight Detail', flight });
  }



function newFlight(req, res) {
    // We'll want to be able to render an  
    // errorMsg if the create action fails
    res.render('flights/new', { title: 'Add Airline', errorMsg: '' });
  }



  async function create(req, res) {
    
    req.body.nowFlying = !!req.body.nowFlying;
 
    req.body.airline = req.body.airline.trim();
    
    if (req.body.airline) req.body.airline = req.body.airline.split(/\s*,\s*/);
    // Remove empty properties so that defaults will be applied
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    try {




  const flightFromTheDatabase =  await FlightModel.create(req.body);
    

    // if you want to see what you put in the database on your server
    console.log(flightFromTheDatabase)


   
    res.redirect(`/flights${flightFromTheDatabase._id}`);  // Update this line
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render('flights/new', { errorMsg: err.message });
  }
} 