const mongoose = require('mongoose');
const color = require('color');

const dbConnection =  async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        
        console.log(`mongo has connected - ${connection.connection.host}`.blue.bold);
    } catch (error) {
        console.log(`Oops!! something went wron.. - ${error.message}`.red.bold);
        process.exit();
    }
}

module.exports = { dbConnection };
