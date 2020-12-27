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
/*//possible middleware for future actions.
postSchema.pre('/^find/',function(next) {
  this.likes = 10
  next();
});

//this middleare was only to check post middleware.
postSchema.post(/^find/, function (docs, next) {
  console.log('likes ', this.likes);
  next();
});*/

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;