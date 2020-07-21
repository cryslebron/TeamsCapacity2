const bcrypt = require('bcrypt')

const saltRounds = 10
const emptyString = ''

const hash = async (plainTextPassword) => {
    try {
        return await bcrypt.hash(plainTextPassword, saltRounds);
    } catch (error) {
        return emptyString
    }
}

const compare = async (plainTextPassword, hashed) => {
    try {
        return await bcrypt.compare(plainTextPassword, hashed)
    } catch (error) {
        return false;
    }
}

module.exports = {
    hash,
    compare
}