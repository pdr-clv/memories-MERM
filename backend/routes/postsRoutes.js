import express from 'express';
import { getPosts, createPost, updatePost, deletePost } from '../controllers/postsControllers.js';

const router = express.Router();

router.route('/').get(getPosts).post(createPost);
router.route('/:id').patch(updatePost).delete(deletePost);

export default router;

