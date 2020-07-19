export default function sprintReducer(state = [], action) {
    switch (action.type) {
        case "CREATE_SPRINT":
            return [...state, { ...action.sprint }];
        case "DELETE_SPRINT":
            const sprintNumber = action.sprintNumber;
            return state.filter(sprint => sprint.sprintNumber !== sprintNumber);
        default:
            return state;
    }
}