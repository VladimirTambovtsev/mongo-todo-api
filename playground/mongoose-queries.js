const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');



/*
var id = '59f0725e0b024a185ee62b78';

if (!ObjectID.isValid(id)) {
	console.log("Id is not valid");
}
Todo.find({
	_id: id
}).then((todos) => {
	console.log(`Todos: ${todos}`);
});

Todo.findOne({
	_id: id
}).then((todo) => {
	console.log(`Todo: ${todo}`);
});
*/
/*
Todo.findById(id).then((todo) => {
	if (!todo) {
		return console.log("Id not found");
	}
	console.log(`Todo: ${todo}`);
}).catch((err) => console.log(err));
*/

User.findById('59f03a9e651a4e7f0980a202').then((user) => {
	if (!user) {
		return console.log("Unable to found user");
	}
	console.log(JSON.stringify(user, undefined, 2));
}).catch((err) => console.log(err));

