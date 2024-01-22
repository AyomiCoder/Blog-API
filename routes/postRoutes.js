const express = require('express');
const postController = require('../controllers/postController');
const { authenticateToken } = require('../middlewares/authMiddleare');

const router = express.Router();

router.post('/posts', authenticateToken, postController.createPost);
router.get('/posts', postController.getPosts);
router.get('/posts/:id', postController.getPostById);
router.put('/posts/:id', authenticateToken, postController.updatePost);
router.delete('/posts/:id', authenticateToken, postController.deletePost);

module.exports = router;
