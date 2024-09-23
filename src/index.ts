import express, { Request, Response } from 'express';
import { Utils } from './Utils';

import mongoose from 'mongoose';
import userRoutes from './UserRoutes';
import cors from 'cors'; //npm install --save-dev @types/cors


const app = express();
const port = process.env.PORT || 3000;

import fs from 'fs';
import path from 'path';
const data:string = fs.readFileSync(path.join(__dirname, 'config.json'),
  { encoding: 'utf8', flag: 'r' });

const config = JSON.parse(data);
const mongoUri = config.connection;


// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', userRoutes);



app.get('/', async (req: Request, res: Response) => {
    
    res.send(Utils.add(1, 2) + "");

});

mongoose.connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });


// app.listen(port, () => {
//       console.log(`Server is running ${port}`);
// });
