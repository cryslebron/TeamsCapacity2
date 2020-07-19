export function createEmployee(employee) {
    return { type: "CREATE_EMPLOYEE", employee };
}

export function deleteEmployee(employeeName) {
    return { type: "DELETE_EMPLOYEE", employeeName };
}
