var mongoose = require('mongoose');

const Todo = mongoose.model('Todo', {
	text: {
		type: String,
		require: true,
		minlength: 1,
		trim: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});

module.exports = {Todo};

/*
const newTodo = new Todo({
	text: 'Cook dinner'
});

newTodo.save().then( (docs) => {
	console.log("Saved Todo: ", docs)
}, (err) => {
	console.log("Unable to save Todo", err);
});

const otherTodo = new Todo({
	text: "  Edit this video   "
	
});

otherTodo.save().then( (docs) => {
	console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
	console.log("Unable to save Todo", err);
}); 
*/
 