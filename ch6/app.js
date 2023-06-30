//Router using
import express from 'express';
import stu from './routes/student.js'  //imported router modules
import teach from './routes/teacher.js'
const app = express();
const port = process.env.PORT || '3000';


//Load router modules
app.use('/vidyarthi', stu); //this path will be appended before the route path in student.js
app.use('/shikshak', teach)

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`)
})