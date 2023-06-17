const listMyPost = async (req, res) => {
    const {
        session,
        db: { Post },
        body: {  }
    } = req
    const user_id = session.userId;
    console.log(user_id)
    const posts = await Post.listMyPost(user_id); 
    res.send(posts);
    // posts ? res.send(posts) : null;
    
}

module.exports = listMyPost