import http from './config'

export async function getAllEmployees() {
    return await http.get(`employee`);
}

export async function getOne(id) {
    return await http.get(`employee/${id}`);
}

export async function post(payload) {
    return await http.post(`employee`, {
        name: payload.name,
        title: payload.title,
        time: payload.time,
        teamId: payload.teamId,
    })
}

export async function deleteByName(name) {
    return await http.delete(`employee/${name}`);
}