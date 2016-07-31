var mongoose = require('mongoose');

var userModel = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: String,
    phone: String,
    pictureUrl: String,
    description: String,
    userHeadline: String,
    likes: Number,
    comments: [{
      user: {type: mongoose.Schema.Types.ObjectId, ref: 'Users'},
      body: String
    }],
    expertedActivities: [{
      activity: String,
      yearsOfExperience: Number
    }],
    tripsCreated: [{type: mongoose.Schema.Types.ObjectId, ref: 'Trips'}],
    tripsScheduledToGoOn: [{type: mongoose.Schema.Types.ObjectId, ref: 'Trips'}],
    guide: Boolean,
    admin: {type: Boolean, default: false}
});

module.exports = mongoose.model('Users', userModel);
