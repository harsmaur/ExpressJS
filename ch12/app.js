import express from 'express';
import web from './routes/web.js'
import {join} from 'path'
const app = express();
const port = process.env.PORT | 3000;

// ejs = embedded javascript

//set template engine
app.set('view engine', 'ejs');

app.use(express.static(join(process.cwd(), 'public')))

//load routes
app.use('/',web )
app.listen(port, ()=>{
    console.log(`Listening to port ${port}`)
})