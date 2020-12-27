import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json({
      status: 'success',
      results: postMessages.length, 
      data: postMessages,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: 'fail',
      message: err.message
    });
  }
};

export const createPost = async (req, res) => {
  try {
    const newPost = await PostMessage.create(req.body);
    res.status(201).json({
      status: 'success',
      data: newPost,
    });
  } catch (err) {
    console.log(err);
    res.status(409).json({
      status: 'fail',
      message: err.message
    });
  }
}

export const updatePost = async (req, res) => {
  try {
    const updatedPost = await PostMessage.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedPost) {
      res.status(404).json({
        status: 'fail',
        message: 'No document founded with this id'
      });
    }
    res.status(200).json({
      status: 'success',
      data: updatedPost,
    });
  } catch (err) {
    res.status(409).json({
      status: 'fail',
      message: err.message
    });
  }
}
