import express from 'express';
import { studentController } from '../controllers/studentController.js';
import myLogger from '../middlewares/logger-middleware.js';
const router = express.Router();

//Router level middleware
router.use(myLogger) //this will only work on this file

router.get('/student', studentController)
export default router;