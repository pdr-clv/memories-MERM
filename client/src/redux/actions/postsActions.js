import * as api from '../../api/indexApi';

// actions

//redux-thunk allows us to include dispatch inside the action object, then we can get some async data, and later dispatch another action with that data.
export const getPosts = () => async (dispatch) => {

  try {
    const { data } = await api.fetchPost();
    //now we can dispatch action. This is like an action inside an action.
    dispatch({ type: 'FETCH_ALL', payload: data.data });
  } catch (err) {
    console.log(err);
  }

}