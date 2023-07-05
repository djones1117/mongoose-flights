const FlightModel = require('../models/flight');

module.exports = {
    create
}


async function create(req, res){

	
	console.log(req.body)
	try {

		const flightFromTheDatabase = await FlightModel.findById(req.params.id)
		
		
		
		flightFromTheDatabase.destinations.push(req.body);
		
		await flightFromTheDatabase.save();
		
		console.log(flightFromTheDatabase)
		
		res.redirect(`/flights/${req.params.id}`)

	} catch(err){
		res.send(err)
	}
		



}