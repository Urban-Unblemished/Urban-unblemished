const listAll = async (req, res) => {
    const {
        session,
        db: { Post },
        body: {}
    } = req
    const user_id = session.userId;
    
    const posts = await Post.listAll(); 
    res.send(posts);
    // console.log(posts)
    // posts ? res.send(posts) : null;
    
}

module.exports = listAll