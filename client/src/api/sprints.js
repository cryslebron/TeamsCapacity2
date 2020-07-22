import http from './config'

export async function getAllSprints() {
    return await http.get(`sprint`);
}

export async function getOne(id) {
    return await http.get(`sprint/${id}`);
}

export async function post(payload) {
    return await http.post(`sprint`, {
        sprintName: payload.sprintName,
        startDate: payload.startDate,
        endDate: payload.endDate,
        teamId: payload.teamId
    })
}

export async function deleteByName(sprintName) {
    return await http.delete(`sprint/${sprintName}`);
}