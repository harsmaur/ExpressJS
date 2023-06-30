
import express from 'express';
const router = express.Router();



//all teacher routes
router.get('/all',(req, res)=>{
    res.send('all teacher')
})

router.post('/create',(req, res)=>{
    res.send('create teacher')
})

router.put('/update',(req, res)=>{
    res.send('update teacher')
})

router.delete('/delete',(req, res)=>{
    res.send('delete teacher')
})

export default router;