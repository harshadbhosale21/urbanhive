import express from 'express';
import { LogOut, Login, Signup } from '../controller/userController.js';

const router = express.Router();

router.post('/signup', Signup);
router.post('/login', Login);
router.post('/logout', LogOut)

export default router;