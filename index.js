import express from 'express';
import bodyParser from 'body-parser'; // allows you to take in incoming post requests bodys
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import usersRoutes from './routes/users.js'
import cors from 'cors';

const app = express(); // calling express
const PORT = 5000; // for our port
dotenv.config()
app.use(cors());
app.use(bodyParser.json()); // body parser middleware, it just tells us that we would be using json in our app


app.use('/users', usersRoutes); // all users routes have /users in common, then for any specific request our usersRoutes callback function will be called



// Creating our routes
app.get('/', (req, res) => res.send('Hello World! from Homepage')); // get request to homepage

//Connecting to the database
mongoose.set("strictQuery", false)

mongoose.connect(process.env.DB_CONNECTION)
.then(() => console.log("Connected to database!"))
.catch(err => console.log(err))
    
// Creating a listening port
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))