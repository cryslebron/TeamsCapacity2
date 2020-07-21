import http from './config'

export async function signUp(payload) {
    try {
        const response = await http.post('signup', {
            username: payload.username,
            password: payload.password,
            email: payload.email,
            firstname: payload.firstname,
            lastname: payload.lastname
        });
        return true;
    } catch (error) {
        return false;
    }
}

export async function login(payload) {
    try {
        const response = await http.post('login', {
            username: payload.username,
            password: payload.password
        });
        return true;
    } catch (error) {
        return false;
    }
}