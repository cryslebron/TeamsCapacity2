import http from './config'

export async function getAll() {
    return await http.get(`sprint`);
}

export async function getOne(id) {
    return await http.get(`sprint/${id}`);
}

export async function post(payload) {
    return await http.post(`sprint`, {
        sprintNumber: payload.sprint
    })
}

export async function deleteByName(sprint) {
    return await http.delete(`sprint/${sprint}`);
}