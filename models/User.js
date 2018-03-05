const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 }
});

//Create a new mongoose model class called users that will
//hold instances of the userSchema
mongoose.model('users', userSchema);
