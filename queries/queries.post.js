const CREATE_POST = `
    INSERT INTO posts(title, content, id_user)
    VALUES ($1, $2, (SELECT id_user FROM users WHERE email = $3))
`;

const GET_POSTS_BY_EMAIL = `
    SELECT p.title, p.content, p.date, u.username
    FROM posts AS p
    INNER JOIN users AS u
    ON p.id_user = u.id_user
    WHERE u.email = $1
    ORDER BY p.title
`;

const GET_ALL_POSTS = `
    SELECT * FROM posts
`;

module.exports = {
    CREATE_POST,
    GET_POSTS_BY_EMAIL,
    GET_ALL_POSTS
};
