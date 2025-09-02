const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://jaydev:jaydev5546@cluster0.rzsc6ik.mongodb.net/test'; // Replace with your MongoDB connection string

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = connectDB;