import express from 'express';
import { getPosts } from '../controllers/postsControllers.js';

const router = express.Router();

router.get('/', getPosts);

export default router;

