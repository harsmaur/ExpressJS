import express from 'express';
import web from './routes/web.js';
const app = express();
const port = 3000;

app.use('/', web);

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`)
})