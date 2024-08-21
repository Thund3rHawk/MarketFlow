import express from 'express'
import cors from 'cors';
import router from './routes';
import { producer } from './controllers/producer.controller';
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use (express.urlencoded({ extended: true }));
app.use (express.json());

app.use ('/',router);
producer();


app.listen (port , ()=>{
    console.log(`App is listning on port ${port}`);    
})