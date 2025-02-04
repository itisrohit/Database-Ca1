const mongooose = require('mongoose')

const itemSchema = new mongooose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true}
})

module.exports = mongooose.model("Item", itemSchema)