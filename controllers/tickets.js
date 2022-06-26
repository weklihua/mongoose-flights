const Ticket = require('../models/ticket')
const Flight = require('../models/flight')
const flights = require('./flights')

module.exports = {
    create,
    new: newTicket,
    addToTicket
}

function newTicket(req, res) {
    Ticket.find({}, function (err, tickets){
        res.render('tickets/new', {
            title: 'Add Ticket',
            tickets
        })
    })
}


function create(req, res) {
 console.log("req.body")
 Ticket.create(req.body, function(err, ticket){
    res.redirect('tickets/new')
 })
}

function addToTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        flight.tickets.push(req.body.id)
        flight.save(function(err){
            res.redirect(`/flights/${flight._id}`)
        })
    })
}