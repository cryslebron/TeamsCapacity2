export default function teamReducer(state = [], action) {
    switch (action.type) {
        case "CREATE_TEAM":
            return [...state, { ...action.team }];
        case "DELETE_TEAM":
            const teamName = action.teamName;
            return state.filter(team => team.teamName !== teamName);
        case "GET_TEAMS":
            return state;
        default:
            return state;
    }
}