import { FETCH_USER } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_USER:
      console.log('FETCH_USER action received');
      return state;
    default:
      return state;
  }
}
