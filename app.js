const express = require('express');
const connectDB = require('./src/db/connection');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


connectDB();

// Sample route
app.get('/', (req, res) => {
    res.send('Hello guys');
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});