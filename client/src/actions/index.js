import axios from 'axios';

import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  console.log('FetchUser action creator called.');
  dispatch({
    type: FETCH_USER,
    payload: await axios.get('/api/current_user')
  });
};
