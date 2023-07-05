import express from 'express';
import web from './routes/web.js'
import myLogger from './middlewares/logger-middleware.js';
import student from './routes/student.js'
const app = express();
const port = process.env.PORT | 3000;

app.set('view engine', 'ejs');

//Application Level Middleware
// app.use(myLogger); //this is without path

// app.use('/about', myLogger) //now this logger will only hit when on /about path
//this will run also after any path after /about



app.use('/', web)
app.use('/student', student)




app.listen(port, ()=>{
    console.log(`Listening to port ${port}`)
})
