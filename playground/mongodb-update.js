const {MongoClient, ObejctID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
 
	//  findOneAndUpdate
	/* db.collection("Todos").findOneAndUpdate({
			completed: false
		}, {
			$set: {
				completed: true
			}
		}, {
			returnOriginal: false
		}).then((result) => {
			console.log(result);
		});
	*/
	db.collection("Users").findOneAndUpdate({
			location: "Moscow"
		}, {
			$set: {
				name: "Vlad"
			},
			$inc: {
				age: 1
			}
		}, {
			returnOriginal: false
		}).then((result) => {
			console.log(result);
		});
	
	//db.close();
});
