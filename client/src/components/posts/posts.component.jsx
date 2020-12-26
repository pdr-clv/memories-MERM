import React from 'react';
import PostItem from './post-item/post.item.component';
import useStyles from './posts.styles';

const Posts = () => {
  const classes = useStyles();
  return (
    <>
      <h1>POSTS</h1>
      <PostItem/>
      <PostItem/>
    </>
  );
};

export default Posts;