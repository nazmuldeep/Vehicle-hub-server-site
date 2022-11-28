const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.Port || 5000;
require('dotenv').config()
// middleware using
app.use(cors());
app.use(express.json())




const uri = `mongodb+srv://vehiclehub:bpsFgEVQ0b5CCtlW@cluster0.ivnriwf.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



app.get('/', (req, res) => {
    res.send('welcome to vehicle hub  server')
});
app.listen(port, () => {
    console.log(`server running on port ${port}`);
})
