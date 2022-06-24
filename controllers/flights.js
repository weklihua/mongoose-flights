const Flight = require('../models/flight')
// const defaultFlight = new Flight()
// const dt = defaultFlight.departs;
// // Format the date for the value attribute of the input
// let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
// departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
// res.render('flights/new', { departsDate });

module.exports = {
    new: newFlight,
    create,
    index,
    show
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {
            title: 'All Flights',
            flights,
        })
        
    })
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        res.render('flights/show', {
            title: 'Flight Detail', 
            flight})})}



function newFlight(req,res) {

    const newFlight = new Flight()
    
    const dt = newFlight.departs;
    // Format the date for the value attribute of the input
    let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
    departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;

    res.render('flights/new', { 
        title: 'New Flight',
        departsDate 
    });
}

function create(req, res) {
    console.log(req.body)
    // if (req.body.departs === "") req.body.departs = req.body.departs.default
    const flight = new Flight(req.body)

    flight.save(function(err){
        if (err) return res.redirect('/flights/new')
        console.log(flight)
        res.redirect('/flights')
    })

}