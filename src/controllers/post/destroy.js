const deletePost = async (req, res) => {
    const {
        session,
        db: { Post },
        params: { post_id }
    } = req
    const user_id = session.userId;
    const user = await Post.delete(post_id);
    res.send(user);
}

module.exports = deletePost;    