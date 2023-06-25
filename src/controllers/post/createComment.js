const createComment = async (req, res) => {
    const {
        session,
        db: { Post },
        body: { user_id, post_id, comments }
    } = req
    // const user_id = session.userId;
    const user = await Post.createComment(user_id, post_id, comments, user_id);
    res.send(user);
}
module.exports = createComment;