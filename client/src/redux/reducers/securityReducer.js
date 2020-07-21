import {
    login,
    signUp
} from './../../api/users';

const initialState = {
    loggedIn: false,
    user: null
};

export default async function securityReducer(state = initialState, action) {
    switch (action.type) {
        case "USER_SIGNUP":
            await signUp(action.user)
            return state;
        case "USER_LOGIN":
            const loggedIn = await login(action.user);
            return { ...state, loggedIn: loggedIn, user: user  };    
        case "USER_LOGOUT":
            return { ...state, loggedIn: false, user: null };
        default:
            return state;
    }
}