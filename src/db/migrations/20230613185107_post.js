/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable ('post', (table) => {
    table.increments('post_id').primary();
    table.integer('user_id').references('id').inTable('users')
    table.text('img_url')
    table.text('header')
    table.text('description')
    table.string('location')
    table.specificType('comments', 'text[]')
    table.timestamps(true, true);

});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('post');