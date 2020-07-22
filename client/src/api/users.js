import http from './config'

export async function signUp(payload) {
    return await http.post('signup', {
        username: payload.username,
        password: payload.password
    });
}

export async function login(payload) {
    try {
        await http.post('login', {
            username: payload.username,
            password: payload.password
        });
        return true;
    } catch (error) {
        return false;
    }
}