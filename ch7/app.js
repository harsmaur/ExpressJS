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

 
app.listen(port, ()=>{
    console.log(`Listening to port ${port}`)
})