import express from  'express'; //using es6 
const port = 3000;

const app = express();

app.get('/',(req, res)=>{
    res.send('Hello this is me Harsh')
})

app.listen(port, ()=>{
    console.log('Port running at 3000')
})