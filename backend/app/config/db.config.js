const mongoose = require('mongoose');
require('dotenv').config()


// const dbURL = "mongodb+srv://Gul:Tazedatabase@cluster0.aqxwp.mongodb.net/users?retryWrites=true&w=majority"

 const dbURL = process.env.dbURL

mongoose.Promise = global.Promise;
mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true})
	.then(() => {console.log("Connected to the database!")})
	.catch(err => {console.log("Cannot connect to the database!", err);
	process.exit();
	});
module.exports = mongoose
