//FIRST EXPRESS JS APPLICATION
// const express = require('express');
import express from 'express';
const app = express();
const port = process.env.PORT || '3000';

app.get('/', (req, res) =>{
    res.send('THIS IS FIRST EXPRESS APP ')
})

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`)
} )