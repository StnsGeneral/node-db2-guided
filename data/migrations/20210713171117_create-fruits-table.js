exports.up = function(knex) {
  return knex.schema.createTable('fruits', table => {
    table.increments() // shortcut for creating an 'id' column that is the primary key
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('fruits')
};
