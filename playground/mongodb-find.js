const {MongoClient, ObejctID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	/*
	db.collection('Todos').find({_id}).toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log("Unable to fetch Todos", err);
	});
	*/

	/* 
	db.collection('Todos').find().count().then((count) => {
		console.log(`Todos: ${count}`); 
	}, (err) => {
		console.log("Unable to fetch Todos", err);
	});
	*/

	db.collection('Users').find({name: "Jane"}).toArray().then((docs) => {
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) =>{
		console.log("Unable to fetch Todos", err);
	});

	//db.close();
});
