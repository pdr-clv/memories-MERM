import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json({
      status: 'success',
      results: postMessages.length,
      data: {
        data: postMessages,
      },
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
  //const post = req.body;
  try {
    const newPost = await PostMessage.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        data: newPost,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(409).json({
      status: 'fail',
      message: err.message
    });
  }
}

//minute 28:51