import axios from 'axios';

//const url = 'http://localhost:8080/posts';
const url = 'posts';

export const fetchPost = () => axios.get(url);

