export function createEmployee(employee) {
    return { type: "CREATE_EMPLOYEE", employee };
}

export function deleteEmployee(name) {
    return { type: "DELETE_EMPLOYEE", name };
}

export function getEmployees() {
    return { type: "GET_EMPLOYEES" };
}
