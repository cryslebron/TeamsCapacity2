import { getAll, post, deleteOne } from "./../../api/teams";

const createTeam = async (team) => {
    const response = await post(team);
    return response.data;
};

const getTeams = async () => {
    const response = await getAll();
    return response.data;
}; 

export default function teamReducer(state = [], action) {
    switch (action.type) {
        case "CREATE_TEAM":
            const newTeam = createTeam(action.team);
            return [...state, newTeam];
        case "DELETE_TEAM":
            await deleteOne(action.teamName);
            //this is still safe - optimistic update
            const teamName = action.teamName;
            return state.filter(team => team.teamName !== teamName);
        case "GET_TEAMS":
            return getTeams();
        default:
            return state;
    }
}