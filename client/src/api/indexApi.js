import axios from 'axios';

const url = 'posts';

export const fetchPost = () => axios.get(url);
export const createPost = (data) => axios({
  method: 'post',
  url: '/posts',
  data,
});


