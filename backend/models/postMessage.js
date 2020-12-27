import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A Memory must have a title']
  },
  message: {
    type: String,
    required: [true, 'A Memory must have a message']
  },
  creator: {
    type: String,
    required: [true, 'A Memory must have a creator']
  },
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;