const mongooose = require('mongoose')

const restaurentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    city: {type:String, required: true},
    itemArr: {
        type: mongooose.Schema.Types.ObjectId,
        ref: Item
    }
})

module.exports = mongooose.model('Restaurant', restaurentSchema)