const mongoose = require('mongoose');
require('dotenv').config();

const connectToMongo=async()=>{
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DATABASE_ID}:${process.env.DATABASE_PASS}@cluster0.4m23f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, { useNewUrlParser: true});
    } catch (error) {
        console.log(error);
    }
    
}

module.exports = connectToMongo;