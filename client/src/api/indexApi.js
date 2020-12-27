import axios from 'axios';

const url = 'posts';

export const fetchPost = () => axios.get(url);
export const createPost = (data) => axios({
  method: 'post',
  url,
  data,
});
export const updatePost = (id, data) => axios({
  method: 'patch',
  url: `${url}/${id}`,
  data,
});
export const deletePost = (id) => axios({
  method: 'delete',
  url: `${url}/${id}`
});

