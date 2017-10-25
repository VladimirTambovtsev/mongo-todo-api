const {MongoClient, ObejctID} = require('mongodb');
 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');


	db.collection('Users').insertOne({
		_id: "1234",
		name: 'Vladimir',
		age: 18,
		location: "Moscow"
	}, (err, result) => {
		if (err) {
			return console.log("Unable to insert users", err);
		}
		
		//console.log(JSON.stringify(result.ops, undefined, 2));
		console.log(result.ops[0]._id);
	});

	db.close();
});
