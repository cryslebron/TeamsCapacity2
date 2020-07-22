export function createSprint(sprint) {
    return { type: "CREATE_SPRINT", sprint };
}

export function deleteSprint(sprintName) {
    return { type: "DELETE_SPRINT", sprintName };
}

export function getSprints() {
    return { type: "GET_SPRINT"};
}