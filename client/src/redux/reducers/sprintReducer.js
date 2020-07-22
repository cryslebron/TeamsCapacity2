import { getAll, post, deleteBySprint } from "./../../api/sprints";

const createSprint = (sprint) => {
    const response = post(sprint);
    return response.data;
};

const getSprint = async () => {
    const response = await getAll();
    return response.data;
}; 


export default function sprintReducer(state = [], action) {
    switch (action.type) {
        case "CREATE_SPRINT":
        const newSprint = createSprint(action.sprint);
        return [...state, { ...action.sprint }];
        case "DELETE_SPRINT":
            const sprintNumber = action.sprintNumber;
            return state.filter(sprint => sprint.sprintNumber !== sprintNumber);
            case "GET_SPRINTS":
            return state;
        default:
            return state;
    }
}