const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://admin:12345qwert@cluster0.gvacque.mongodb.net/paytm");

const userSchema  = new mongoose.Schema({
    username:String,
    password:String,
    firstname:String,
    lastname:String,

})

const User = mongoose.model("User",userSchema)

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model('Account', accountSchema);

module.exports = {
    User,
    Account
}