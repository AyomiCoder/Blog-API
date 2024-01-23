const Post = require('../models/Post');

async function createPost(req, res) {
  try {
    const post = new Post({
      title: req.body.title,
      content: req.body.content,
      author: req.user._id
    });
    await post.save();
   res.status(201).json(post);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getPosts(req, res) {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getPostById(req, res) {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId).populate('author', 'username');

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.sendJson(post);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function updatePost(req, res) {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).send('Post not found.');

    post.title = req.body.title;
    post.content = req.body.content;
    await post.save();
    res.json(post);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function deletePost(req, res) {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).send('Post not found.');

    res.sendJson({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = { createPost, getPosts, getPostById, updatePost, deletePost };
