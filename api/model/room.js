const mongoose = require ("mongoose");
const roomSchema = mongoose.Schema ({
    roomNo: {type: String, require: true},
    roomType:{type: String, require: true},
    availability: {type: String, require: true},
    price: {type: String, require: true},
    features: {type: String, require: true}
});
module.exports = mongoose.model('Room', roomSchema);