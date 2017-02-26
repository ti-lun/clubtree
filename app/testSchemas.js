
var mongoose = require("mongoose");
var	 Member = require("./models/members").Member;


//Apparently, this is how you import and use members, you need to 
//no HAVE to exports the individual members in your model.js files



//Kitty schema
var kittySchema = mongoose.Schema({
    name: String
});
var Kitten = mongoose.model('Kitten', kittySchema);
var silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'





//Connecting to the db through mongoose >.>
mongoose.connect("mongodb://localhost/clubtree");
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

//Does something
// db.once('open', function() {
  // we're connected!
 //  var john = new Member(
	// {
	// firstName: "john",
	// lastName: "wicks",
	// email: "not4You@what.com",
	// clubs: [{}]
	// });
	// console.log (john);
 //  console.log("yo what up? Adding John in.");
 //  john.save();

// });

var john = new Member(
	{
	firstName: "john",
	lastName: "wicks",
	email: "not4You@what.com",
	clubs: [{}]
	});

	console.log (john);
  console.log("yo what up? Adding John in.");
  john.save();


