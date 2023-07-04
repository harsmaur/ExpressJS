import express from 'express';
import web from './routes/web.js'
const port = 3000;
const app = express();

//set template engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('public'));

//load routes
app.use('/', web);







app.listen(port, ()=>{
   console.log(`Listening to port ${port}`)
})