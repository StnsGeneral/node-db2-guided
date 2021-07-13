exports.up = function(knex) {
  return knex.schema.createTable('fruits', table => {
    table.in
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('fruits')
};
