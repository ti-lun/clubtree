var i = {"what the hell mate" : 1};


console.log(i);



var MongoClient = require('mongodb').MongoClient,  test = require('assert');
var url = 'mongodb://localhost:27017/clubtree';

var addDocToCollect = function(collection_name, docs)
{
	//Takes a collection name in stringss
	//and an encapsulated datatype docs
	 MongoClient.connect(url, function(err, db) {
	  //In order to add something to our database, we have to call from
	  //the db arg its collection function( "name of your collection", a function to make it easier)
	  // The main point of this implementation is to be sure you don't have any error
	  var getYourCollectionsName = db.collection(collection_name, function(error, collection)
	    {
	      console.log(error);
	      collection.insert(docs, function(){
	        console.log("Successful insertion of ", docs );
	      });

	    });	  
	  	db.close();
	});
}
module.exports = addDocToCollect;