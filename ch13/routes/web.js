import express from 'express';
import { homeController } from '../../ch13/controllers/homeController.js';
import { aboutController } from '../../ch13/controllers/aboutController.js';
const router = express.Router();

router.get('/', homeController)
router.get('/about', aboutController)
router.get('/about/11', (req, res)=>{
    res.send('/about/11')
})

export default router;