const Post = require('../models/Post');

async function createPost(req, res) {
  try {
    const post = new Post({
      title: req.body.title,
      content: req.body.content,
      author: req.user._id
    });
    await post.save();
   // Populate the author field before sending the response
   await post.populate({ path: 'author', select: 'username' }).execPopulate();
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

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = { createPost, getPosts, updatePost, deletePost };
