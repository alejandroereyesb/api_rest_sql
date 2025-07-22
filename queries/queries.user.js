const CREATE_USER = `
    INSERT INTO users(username, email, password, logged)
    VALUES ($1, $2, $3, $4)
`;

const EXIST_USER = `
    SELECT * FROM users WHERE email = $1
`;

const SET_LOGGED_TRUE = `
    UPDATE users
    SET logged = true
    WHERE email = $1
    RETURNING *
`;

const SET_LOGGED_FALSE = `
    UPDATE users
    SET logged = false
    WHERE email = $1
    RETURNING *
`;

module.exports = {
    CREATE_USER,
    EXIST_USER,
    SET_LOGGED_TRUE,
    SET_LOGGED_FALSE
};
