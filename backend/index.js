import express from 'express';
// import { PORT, mongoDBURL } from './config.js';
import mongose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';
import { PORT } from './config.js';

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

app.listen(PORT,()=>{
  console.log("Server is ready to run.")
})

app.use('/books', booksRoute);

mongose.connect("mongodb://0.0.0.0:27017/authen").then(()=>{
  console.log("mongodb connected");
}).catch((error)=>{
  console.log("db not connected",error);
})
