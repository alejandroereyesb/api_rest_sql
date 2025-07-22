const { executeQuery } = require('../utils/dbHelper');
const queries = require('../queries/queries.user');

const createUser = async (username, email, password, logged = false) => {
    return await executeQuery(queries.CREATE_USER, [username, email, password, logged]);
};

const existUser = async (email) => {
    const result = await executeQuery(queries.EXIST_USER, [email]);
    return result[0];
};

const setLoggedTrue = async (email) => {
    return await executeQuery(queries.SET_LOGGED_TRUE, [email]);
};

const setLoggedFalse = async (email) => {
    return await executeQuery(queries.SET_LOGGED_FALSE, [email]);
};

const users = {
    createUser,
    existUser,
    setLoggedTrue,
    setLoggedFalse
};

module.exports = users;