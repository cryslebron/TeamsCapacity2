import { getAll, post, deleteByName } from "./../../api/teams";

const createTeam = (team) => {
    const response = post(team);
    return response.data;
};

const getTeams = async () => {
    const response = await getAll();
    return response.data;
}; 

export default  function teamReducer(state = [], action) {
    switch (action.type) {
        case "CREATE_TEAM":
            const newTeam = createTeam(action.team);
            return [...state, action.team];
        case "DELETE_TEAM":
            deleteByName(action.teamName);
            //this is still safe - optimistic update
            const teamName = action.teamName;
            return state.filter(team => team.teamName !== teamName);
        case "GET_TEAMS":
            //const allTeams = await getTeams();
            return state;
        default:
            return state;
    }
}