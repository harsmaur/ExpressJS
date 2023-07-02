import express from 'express';
import web from './routes/web.js'
import {join} from 'path';
const app = express();
const port = 3000;

//Static Files
app.use(express.static(join(process.cwd(), 'public'))) //by specifying here the public we can now use css in the html file my location next directry from public(see in index.html link )




//to add a virtual path 
//now we need to add /static before any path for eg for css path in index.html in view we have to give path /static/css/style.css
// app.use('/static', express.static(join(process.cwd(), 'public')))



//Load Routes
app.use('/', web)

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`)
})