//setup babel with express js
import express from 'express';

const app = express();
const port = 3000

app.get('/',(req, res)=>{
    res.send("This is babel1142356")
})

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`)
})