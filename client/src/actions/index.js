import axios from 'axios';

import { RECEIVE_USER } from './types';

export const fetchUser = () => async dispatch => {
  //This is a good point to dispatch a REQUEST_USER action, to enable loading spinners for example
  
  const res = await axios.get('/api/current_user');
  dispatch({
    type: RECEIVE_USER,
    payload: res.data
  });
};

export const handlePaymentToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  //Dispatches the RECEIVE_USER action to update the user info with the new credits
  dispatch({
    type: RECEIVE_USER,
    payload: res.data
  });
};


//Note: (from https://redux.js.org/advanced/async-actions)
    // Do not use catch (inside thunk functions), because that will also catch
    // any errors in the dispatch and resulting render,
    // causing a loop of 'Unexpected batch number' errors.
    // https://github.com/facebook/react/issues/6895

