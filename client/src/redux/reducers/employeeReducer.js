import { getAllEmployees, post, deleteByName } from "../../api/employees";

const createEmployee = (employee) => {
    const response = post(employee);
    return response.data;
};

const getEmployees = async () => {
    const response = await getAllEmployees();
    return response.data;
};

export default function employeeReducer(state = [], action) {
    switch (action.type) {
        case "CREATE_EMPLOYEE":
            const newEmployee = createEmployee(action.employee);
            return [...state, { ...action.employee }];
        case "DELETE_EMPLOYEE":
            deleteByName(action.name);
            const name = action.name;
            return state.filter(employee => employee.name !== name);
        case "GET_EMPLOYEE":
            //const allEmployees = await getEmployees();
            return state;
        default:
            return state;
    }
}