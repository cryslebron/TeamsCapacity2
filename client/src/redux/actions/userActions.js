export function createUser(user) {
    return { type: "CREATE_USER", user };
}

export function deleteUser(userName) {
    return { type: "DELETE_USER", userName };
}
