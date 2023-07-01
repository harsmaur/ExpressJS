//Route Parameters
import express from 'express';
const app = express();
const port = process.env.PORT || '3000';

//single parameter
app.get('/student/delete/:id', (req, res)=>{
    console.log(req.params)   //we will get id and its value as key value pair param in console
    res.send(`student with id ${req.params.id} has been deleted`)
})

//two parameters
app.get('/product/:category/:id', (req, res)=>{
    const {category, id} = req.params; //destructred from
    console.log(req.params)  //we will get id and its value as key value pair param in console
    res.send(`product with id: ${id} category: ${category}  has been deleted`)
})

//three params
app.get('/product/:category/:id/:price', (req, res)=>{
    const {category, id, price} = req.params; //destructred from
    console.log(req.params)  //we will get id and its value as key value pair param in console
    res.send(`product with id: ${id} category: ${category} price: ${price}  has been deleted`)
})

//mixed with strings
app.get('/product/order/:year/and/:month', (req, res)=>{
    const {year, month} = req.params; //destructred from
    console.log(req.params)  //we will get id and its value as key value pair param in console
    res.send(`product order month: ${month} year: ${year} has been deleted`)
})

//two params next to each other
app.get('/train/:from-:to', (req, res)=>{
    const {from, to } = req.params; //destructred from
    console.log(req.params)  //we will get id and its value as key value pair param in console
    res.send(`Train from: ${from} to: ${to}  has been cancelled`)
})


app.get('/location/:state.:city', (req, res)=>{
    const {state, city } = req.params; //destructred from
    console.log(req.params)  //we will get id and its value as key value pair param in console
    res.send(`state: ${state} city: ${city} `)
})


 
//Route parameter with RegX(regular expression)
app.get('/studentdata/delete/:id([0-9]{3})', (req, res)=>{ //restriction on id only numeric 0 to 9 with size of 3
    console.log(req.params)   
    res.send(`student with id: ${req.params.id} has been deleted`)
})

//or operator either post or article
app.get('/:type(post|article)/:id', (req, res)=>{
    console.log(req.params)
    res.send('Post or article')
  })




//   app.param(nameOFParameter, callback)
//1
app.param('id', (req, res, next, id)=>{ //this callback will run before response callback this is also called only once.

    console.log(`ID: ${id}`)
    next();
})
app.get('/user/:id', (req, res)=>{
    console.log('This is user id path')
    res.send('Response ok')
})

//2 array of route parameter in app.param()
app.param(['id', 'page'], (req, res, next, value)=>{ 
    console.log(`ID: ${value}`)
    next();
})
app.get('/profile/:page/:id', (req, res)=>{
    console.log('This is user id path and page')
    res.send('Response ok from array param')
})


app.listen(port, ()=>{
    console.log(`Listening to port ${port}`)
})