import express from 'express';
import web from './routes/web.js'
import underCons from './middlewares/uc-middleware.js';
const app = express();
const port = process.env.PORT | 3000;

//Application level middleware
app.use('/about/12',underCons);


//set template engine
app.set('view engine', 'ejs');
//load routes
app.use('/', web)


app.listen(port, ()=>{
    console.log(`Listening to port ${port}`)
})
