//Routing //see images folder for explanation
import express from 'express';
const app = express();
const port = process.env.PORT || '3000';

//different types of requests
app.get('/', (req, res) =>{
    res.send('Get METHOD')
})

app.all('/sabkuch', (req,res)=>{
    res.send('through all method')
})

app.all('/api/*', (req,res)=>{
    res.send('API PAGE')
})

//string path
app.get('/about', (req,res)=>{
    res.send('This is about page')
})

app.get('/contact', (req,res)=>{
    res.send('Contact page')
})

//String Patterns path
app.get('/ab?cd', (req,res)=>{
    res.send('This route path will match acd and abcd ')
})

//Regular Expression path
app.get(/a/, (req,res)=>{
    //routes containing 'a; will get by this method
    res.send('This is a')
})





//use this * path at last 
app.get('*',(req, res)=>{
    res.send('Page Not Found')
})

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`)
} )