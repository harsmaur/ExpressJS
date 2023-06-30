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
// app.get(/a/, (req,res)=>{
    //routes containing 'a; will get by this method
    // res.send('This is a')
// })


//Different ways to define callback

//1. More than One callback
app.get('/cb2', (req, res, next)=>{
    // res.send('More than One callback') //cannot send two responses
    //write some logic part here
    console.log('first callback')
    next(); //we need to call next() here in order for the next callback to run
}, (req, res)=>{
    res.send('This is second callabck of more than one callback path')
})

//2 one callback
app.get('/cb1', (req, res)=>{
    res.send('One callback')
})

//array of callback
const c1 = (req, res, next)=>{
    console.log('First callback of array');
    next()
}
const c2 = (req, res, next)=>{
    console.log('second callback of array');
    next();
}
const c3 = (req, res)=>{
    console.log('third callback of array');
    res.send('Response from third array callback')
}

app.get('/arraycb', [c1, c2, c3]);


//combination of independent function and array of functions callbacks
const c4 = (req, res, next)=>{
    console.log('second callback of array');
    next();
}
const c5 = (req, res, next)=>{
    console.log('second callback of array');
    next();
}

app.get('/arrayWithFunctioncb',[c4, c5], (req, res, next)=>{
console.log('third callback function')
next()
},(req, res)=>{
    console.log('Fourth callback');
    res.send('Combinational callback')
})



//Chained route Callbacks.
//below we need to call student path but with different methods each time
app.route('/student')
.get((req, res)=>{
    res.send('all Student')
})
.post(( req, res)=>{
    res.send('add new Student')
})
.put((req, res)=>{
    res.send('Update Student')
})


app.route('/professor')
.all((req,res, next)=>{  //
    console.log('First run this for all http method')
    next();
})
.get((req, res)=>{
    res.send('all prof')
    console.log('Get method ')
})
.post(( req, res)=>{
    res.send('add new prof')
    console.log('post method ')
})
.put((req, res)=>{
    res.send('Update prof')
    console.log('put method ')
})








//use this * path at last 
app.get('*',(req, res)=>{
    res.send('Page Not Found')
})

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`)
} )