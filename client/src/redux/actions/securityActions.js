export function signUp(user) {
    return { type: "USER_SIGNUP", user };
}

export function logIn(user) {
    return { type: "USER_LOGIN", user };
}

export function logOut(user) {
    return { type: "USER_LOGOUT" };
}