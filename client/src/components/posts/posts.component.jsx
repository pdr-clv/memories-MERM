import React from 'react';
import { useSelector } from 'react-redux';
//we can get data from the state-redux using useSelector.

import PostItem from './post-item/post.item.component';
import useStyles from './posts.styles';


const Posts = () => {
  const posts = useSelector((state) => state.postsReducer);
  const classes = useStyles();
  console.log(posts);
  return (
    <>
      <h1>POSTS</h1>
      <PostItem/>
      <PostItem/>
    </>
  );
};

export default Posts;