require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const mongoString = 'mongodb+srv://zoechen723:ymsXgm6EJyiuFMAW@cluster0.3urdvx9.mongodb.net/game';
mongoose.set('strictQuery', false);

mongoose.connect(
    mongoString,
    {useNewUrlParser:true})
    .then(()=>{
        console.log("Connected to MongoDB");
    })
    .catch(()=>{
        console.log("Couldn't connect to MongoDB");
    })
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

const app = express();
app.use(cors())
app.use(express.json());

const routes = require('./routes/diff');

app.use('/api', routes)

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})