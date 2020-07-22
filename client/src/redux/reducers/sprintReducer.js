import { getAll, post, deleteByName } from "./../../api/sprints";

const createSprint = (sprint) => {
    const response = post(sprint);
    return response.data;
};

const getSprints = async () => {
    const response = await getAll();
    return response.data;
};


export default function sprintReducer(state = [], action) {
    switch (action.type) {
        case "CREATE_SPRINT":
            const newSprint = createSprint(action.sprint);
            return [...state, { ...action.sprint }];
        case "DELETE_SPRINT":
            deleteByName(action.sprintName);
            const sprintName = action.sprintName;
            return state.filter(sprint => sprint.sprintName !== sprintName);
        case "GET_SPRINTS":
            //const allSprints = await getSprints();
            return state;
        default:
            return state;
    }
}