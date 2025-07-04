import express from 'express';
import { githubLogin, githubCallback } from '../controllers/auth.js';

const router = express.Router();

router.get('/github', githubLogin);
router.get('/github/callback', githubCallback);

export default router;
