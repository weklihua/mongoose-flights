const Ticket = require('../models/ticket')
const Flight = require('../models/flight')

module.exports = {
    create,
    new: newTicket,
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
}