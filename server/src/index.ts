import express, { Request, Response } from 'express'

const app = express();

const port = process.env.PORT || 4000;

app.get ('/', (req: Request,res: Response)=>{
    res.send ('hello world');
})

app.listen (port , ()=>{
    console.log(`App is listning on port ${port}`);    
})