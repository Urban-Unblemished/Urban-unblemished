const createPost = async (req, res) => {
    const {
        session,
        db: { Post },
        body: {img_url, description, header, location}
    } = req
    const user_id = session.userId;
    // console.log(user_id, img_url, description, header)
    // user_id, img_url, description, header, location
    console.log(session, req.body)
    const user = await Post.create(user_id, img_url, description, header, location);
    // console.log(user);
    res.send(user); 
}

module.exports = createPost;    