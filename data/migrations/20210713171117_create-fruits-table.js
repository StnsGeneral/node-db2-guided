exports.up = function(knex) {
  return knex.schema.createTable('fruits', table => {
    table.increments('fruit_id') // shortcut for creating an 'id' column that is the primary key
    table.text('fruit_name', 128) // column of data type 'varchar(128)' named 'fruit
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('fruits')
};
