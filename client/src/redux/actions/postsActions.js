import * as api from '../../api/indexApi';

// actions

//redux-thunk allows us to include dispatch inside the action object, then we can get some async data, and later dispatch another action with that data.
export const getPosts = () => async (dispatch) => {

  try {
    const { data } = await api.fetchPost();
    //now we can dispatch action. This is like an action inside an action.
    //payload data.data, because data is wrapped into data atribute, it has more attributes.
    dispatch({ type: 'FETCH_ALL', payload: data.data });
  } catch (err) {
    console.log(err);
  }

}

export const newPost = (postData) => async (dispatch) => {

  try {
    const { data } = await api.createPost(postData);
    console.log(data);
    //now we can dispatch action. This is like an action inside an action.
    //payload data.data, because data is wrapped into data atribute, it has more attributes.
    dispatch({ type: 'CREATE_POST', payload: data.data });
  } catch (err) {
    console.log(err);
  }

}