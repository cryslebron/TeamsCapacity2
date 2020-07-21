import http from './config'

export async function getAll() {
    return await http.get(`team`);
}

export async function getOne(id) {
    return await http.get(`team/${id}`);
}

export async function post(payload) {
    return await http.post(`team`, {
        name: payload.name
    })
}

export async function deleteByName(name) {
    return await http.delete(`team/${name}`);
}