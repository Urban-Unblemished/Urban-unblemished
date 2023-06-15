const deletePost = async (req, res) => {
    const {
        session,
        db: { Post },
        body: { post_id }
    } = req
    const user_id = session.user_id;
    const user = await Post.delete(post_id);
    res.send(user);
}

module.exports = deletePost;    