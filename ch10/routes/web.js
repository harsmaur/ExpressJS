import express from 'express';
import { homecontroller } from '../controllers/homecontroller.js';
const router = express.Router();

router.get('/', homecontroller);

export default router;