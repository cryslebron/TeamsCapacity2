export function createTeam(team) {
    return { type: "CREATE_TEAM", team };
}

export function deleteTeam(teamName) {
    return { type: "DELETE_TEAM", teamName };
}

export function getTeams() {
    return { type: "GET_TEAMS" };
}