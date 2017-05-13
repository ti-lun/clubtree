'use strict';

let faker = require('faker');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//assert.equal(query.exec().constructor, global.Promise);

var models = require('../app/models');

mongoose.connect('mongodb://clubtree:cttest@ds137271.mlab.com:37271/clubtree_dev');
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

mongoose.connection.once('open', (callback) => {
    let document = new models.Club({
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

    document.save(function (err) {
        if (err) throw err;
      
        console.log('inserted 1 random club profile: ' + document._id);

        mongoose.connection.db.close(function (err) {
            if(err) throw err;
        })
    })
});
