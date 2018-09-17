import uuid from 'uuid';

const usersReducerDefaultState = {
    userId: uuid(),
    userName: '',
    loggedIn: false
};
export default (state = usersReducerDefaultState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                userName: action.userName,
                loggedIn: true
            };
        default:
            return state;
    }
};