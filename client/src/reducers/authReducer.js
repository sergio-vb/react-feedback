import { RECEIVE_USER } from '../actions/types';

/** Reducer authReducer
Handles the "auth" piece of state; determines whether user
is logged in. Possible states:
null: Hasn't been confirmed if the user is logged in or not, initial value
Object: The user model, means that the user is logged in.
false: The user is not logged in.
 */
export default function(state = null, action) {
  switch (action.type) {
    case RECEIVE_USER:
      //Sets the auth piece of state based on the received payload
      return action.payload || false;
    default:
      return state;
  }
}
