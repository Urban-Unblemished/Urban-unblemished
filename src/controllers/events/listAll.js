const listAll = async (req, res) => {
    const {
        session,
        db: { Events },
        body: {}
    } = req
    const user_id = session.user_id;
    
    const posts = await Events.listAll(); 
    res.send(posts);
    // console.log(posts)
    // posts ? res.send(posts) : null;
    
}

module.exports = listAll