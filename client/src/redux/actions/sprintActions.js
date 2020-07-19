export function createSprint(sprint) {
    return { type: "CREATE_SPRINT", sprint };
}

export function deleteSprint(sprintNumber) {
    return { type: "DELETE_SPRINT", sprintNumber };
}