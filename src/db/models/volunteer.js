const knex = require('../knex');

class Volunteer {
    constructor({volunteer_id, user_id, event_id,}){
        this.volunteer_id = volunteer_id
        this.user_id = user_id
        this.event_id = event_id
    }

    static async volunteer (volunteer_id, user_id, event_id) {
        try {
          const query = `INSERT INTO volunteer (volunteer_id, user_id, event_id)
            VALUES (?, ?, ?) RETURNING *`;
          const { rows: [post] } = await knex.raw(query, [volunteer_id, user_id, event_id]);
          return post ? new Post(post) : null;
        } catch (err) {
          console.error(err);
          return null;
        }
      }

      static async allVolunteers (event_id) {
        try {
          const query = `SELECT * FROM volunteer WHERE event_id = ?`;
          const { rows: [rows] } = await knex.raw(query, [volunteer_id, user_id, event_id]);
          return rows.map((row) => new Volunteer(row));
        } catch (err) {
          console.error(err);
          return null;
        }
      }




}

module.exports = Volunteer;