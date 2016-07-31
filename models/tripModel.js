var mongoose = require('mongoose');

var tripModel = new mongoose.Schema({
    guideObject: {type: mongoose.Schema.types.ObjectId, ref: "User"},
    locationObject: {
      destinationName: String,
      city: String,
      state: String,
      zip: Number,
      country: String,
      lat: String,
      lng: String
    },
    activities: [String],
    description: String,
    tripHeadline: String,
    minimumAge: Number,
    tripDifficulty: Number,
    mapUrl: String,
    itinerary: [{
      component: String,
      description: String
    }],
    passportRequired: Boolean,
    estTripTimeInHrs: String,
    pictureUrls: [String],
    tripDates: [{
      date: Date,
      scheduled: Boolean,
      scheduledWithWhom: {type: mongoose.Schema.types.ObjectId, ref: "User"}
    }],
    tripOptions:[{
      optionSpecifics: String,
      dollarsPerPerson: Number
    }]
});

module.exports = mongoose.model('Trip', tripModel);
