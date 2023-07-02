import express from 'express';
import web from './routes/web.js'
import {join } from 'path'
const app = express();
const port = process.env.PORT | 3000;

//Setup the Directory where template files are located
// app.set('views', './views')   need not to setup this iff files are inside views


//Setup the template engine using
app.set('view engine', 'ejs');

//load routes
app.use('/', web)


app.use(express.static(join(process.cwd(), 'public'))) 


app.listen(port, ()=>{
    console.log(`Listening to port ${port}`)
})