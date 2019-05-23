const mongoose = require("mongoose");
const username = process.env.MONGO_USER //store in .env file
const password = process.env.MONGO_PWD

const dbURI =
`mongodb+srv://${username}:${password}@cluster0-rcpxe.mongodb.net/test?retryWrites=true`

mongoose.connect(dbURI, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
