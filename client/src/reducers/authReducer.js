import { FETCH_USER } from '../actions/types';

/** Reducer authReducer
Handles the "auth" piece of state; determines whether user
is logged in. Possible states:
null: Hasn't been confirmed if the user is logged in or not.
Object: The user model, means that the user is logged in.
false: The user is not logged in.
 */
export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      console.log('FETCH_USER action received');
      //Returns the user model, or false if it couldn't be fetched
      return action.payload || false;
    default:
      return state;
  }
}
