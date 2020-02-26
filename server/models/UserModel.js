const bcrypt = require('bcrypt')
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        min:[4, "Too Short, min is 4"],
        max: [32, "Too long, max is 128 characters"]
      },
      email: {
        type: String,
        min:[4, "Too Short, min is 4"],
        max: [32, "Too long, max is 128 characters"],
        unique: true,
        lowercase:true,
        required: 'Email is Required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
      },
      encryptedPassword:{
        type: String,
        min:[4, "Too Short, min is 4"],
        max: [32, "Too long, max is 128 characters"]

    },
    password:{
        type: String,
        min:[4, "Too Short, min is 4"],
        max: [32, "Too long, max is 128 characters"]

    },
      role: { type: String, enum: ['admin', 'restricted'], required: true }
      
});

userSchema.methods.isSamePassword = function(requestedPassword){
    return bcrypt.compareSync(requestedPassword, this.password)

}
userSchema.pre('save', function(next){
const user = this;
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err, hash) {
            // Store hash in your password DB.
            user.password = hash;
            next();
        });
    });
})

module.exports = mongoose.model("UserModel", userSchema);
