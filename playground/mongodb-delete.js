const {MongoClient, ObejctID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// delete many
	/*
	db.collection('Todos').deleteMany({text: "Eat lunch"}).then((result) => {
		console.log(result);
	}, (err) => {
			console.log("Unable to delete Todos", err);
	});
	*/
	// delete one
	 
	/*
	db.collection("Todos").deleteOne({text: 'Eat lunch'}).then((result) => {
		console.log(result);
	}, (err) => {
		console.log("Unable to delete Todos", err);
	});
	*/

	//  findOneAndDelete
	db.collection("Todos").findOneAndDelete({completed: false}).then((result) => {
		console.log(result);
	}, (err) => {
		console.log("Unable to delete Todos", err);
	});
	
	//db.close();
});
