var mongoose = require('mongoose');

// User table 
const User = mongoose.model('User', {
	email: {
		type: String,
		required: true,
		trim: true,
		minlength: 1
	}
})


module.exports = {User};

/*
const newUser = new User({

});

newUser.save().then( (docs) => {
	console.log("User saved", docs);
}, (err) => {
	console.log("Unable to save: ", err);
});
*/