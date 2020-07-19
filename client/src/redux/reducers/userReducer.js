export default function userReducer(state = [], action) {
    switch (action.type) {
        case "CREATE_USER":
            return [...state, { ...action.user }];
        case "DELETE_USER":
            const userName = action.userName;
            return state.filter(user => user.userName !== userName);
        default:
            return state;
    }
}