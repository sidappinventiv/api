import express from 'express';
import { signup, login, getUsers } from '../controllers/userController';
import { authenticateToken } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/users', authenticateToken, getUsers);

export default router;
