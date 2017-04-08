'use strict';

let faker = require('faker');
var mongoose = require('mongoose');

require('../app/models/Clubs');

mongoose.connect('mongodb://localhost/clubtree');

let Club = mongoose.model('Club');
let document = new Club({
    clubName: faker.commerce.productName() + ' Club',
    description: faker.lorem.paragraph(),
    survey: {
        dateFounded: faker.date.past(faker.random.number({ min: 1, max: 20 })).getFullYear(),
        numberOfMembers: faker.random.number({min: 3, max: 50}),
        meetingLocation: 'No where in particular',
        meetingTime: 'No time in particular'
    },
    personality: {
        values: ''
    },
    members: [],
    organizers: [],
    tags: ['relaxed', 'fun', 'low commitment'],
    category: ''
});

document.save();

console.log('inserted 1 random club profile: ' + document._id);

mongoose.disconnect();
