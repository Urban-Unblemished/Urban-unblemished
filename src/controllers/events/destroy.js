const deleteEvent = async (req, res) => {
    const {
        session,
        db: { Events },
        params: { event_id }
    } = req
    const user_id = session.userId;
    const user = await Events.delete(event_id);
    res.send(user);
}

module.exports = deleteEvent;    