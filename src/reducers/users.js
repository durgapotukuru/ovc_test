import { FETCH_USER } from '../actions/users';

const initialAppState = [];

const userReducer = (state = initialAppState, action) => {
    switch (action.type) {
        case FETCH_USER:
            // console.log(action.users);
            return action.users;
        default:
            return state;
    }
}

export default userReducer;