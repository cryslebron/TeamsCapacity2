export default function employeeReducer(state = [], action) {
    switch (action.type) {
        case "CREATE_EMPLOYEE":
            return [...state, { ...action.employee }];
        case "DELETE_EMPLOYEE":
            const employeeName = action.employeeName;
            return state.filter(employee => employee.employeeName !== employeeName);
        default:
            return state;
    }
}