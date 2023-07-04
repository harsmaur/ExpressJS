import express from 'express';
import { homeController } from '../controllers/homeController.js';
import { contactController } from '../controllers/contactController.js';
import { skillsController } from '../controllers/skillsContainer.js';
import { servicesController } from '../controllers/servicesController.js';
const router = express.Router();

router.get('/', homeController)
router.get('/contact', contactController)
router.get('/skills', skillsController);
router.get('/services', servicesController)


export default router;