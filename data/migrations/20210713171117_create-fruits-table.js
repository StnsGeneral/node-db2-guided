exports.up = function(knex) {
  return knex.schema.createTable('fruits', table => {
    table.increments('fruit_id') // shortcut for creating a primary key
    table.text('fruit_name', 128) // column of data type 'text' named 'fruit_name'
    table.decimal('avg_weight_oz')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('fruits')
};
