const mongoose = require('mongoose');

const connnectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            user: process.env.MONGO_USER,
            pass: process.env.MONGO_PASS,
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = connnectDB;