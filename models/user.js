const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
});

const plugin = typeof passportLocalMongoose === 'function' 
               ? passportLocalMongoose 
               : passportLocalMongoose.default;

userSchema.plugin(plugin);
// userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);