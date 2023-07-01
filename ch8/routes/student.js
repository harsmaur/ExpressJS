import express from 'express';
import { allStudent, deleteStudent } from '../controllers/studentController.js';
const router = express.Router();


//all logic of this route is in controller
router.get('/all',allStudent)


router.get('/delete/:id([0-9]{2})',deleteStudent)

export default router;