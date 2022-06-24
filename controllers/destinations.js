const Flight = require('../models/flight')

module.exports = {
    create
}

function create(req, res){
    Flight.findById(req.params.id, function(err, flight){
        flight.destinations.push(req.body)
        flight.save(function(err){
            //response with a redirect because we have mutated our data
            res.redirect(`/flights/${flight._id}`)
        })
    })
}