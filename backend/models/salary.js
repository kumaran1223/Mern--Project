const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let salarySchema = new Schema({ monthyear: {
    type: String, required: true
    },
    netsal: {
    type: Number, required: true
    },
    employeeid: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Employee',
    required: true
    }
    })
    
    module.exports = mongoose.model('Salary', salarySchema)
    