const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let employeeSchema = new Schema({
    name:{
    type: String,
        required: true
    },
    email : {
        type:String,
    },
    empno: {
        type: Number,
    }

})
module.exports = mongoose.model('Employee', employeeSchema);
