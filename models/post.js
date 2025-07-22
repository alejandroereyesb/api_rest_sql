const { executeQuery } = require('../utils/dbHelper');
const queries = require('../queries/queries.post');

const createPost = async (post) => {
    const { title, content, email } = post;
    return await executeQuery(queries.CREATE_POST, [title, content, email]);
};

const getPostsByEmail = async (email) => {
    return await executeQuery(queries.GET_POSTS_BY_EMAIL, [email]);
};

const getAllPosts = async () => {
    return await executeQuery(queries.GET_ALL_POSTS);
};

const posts = {
    createPost,
    getPostsByEmail,
    getAllPosts
};

module.exports = posts;