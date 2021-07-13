exports.up = function(knex) {
  return knex.schema.createTable('fruits', table => {
    table.increments('fruit_id') // shortcut for creating a primary key
    table.text('fruit_name', 128) // column of data type 'text' named 'fruit_name'
    table.decimal('avg_weight_oz') // column of data type 'decimal' named 'avg_weight_oz'
    table.boolean('delicious')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('fruits');
};
