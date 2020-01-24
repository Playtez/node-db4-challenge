exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl
        .string("recipe_name", 128)
        .notNullable()
        .index();
      tbl.string("instructions", 128);
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl.string("ingredient_name", 128).notNullable();
    })
    .createTable("recipe_ingredients", tbl => {
      tbl.increments();
      tbl.float("quantity").notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT") // what happens if the publisher with this id is deleted
        .onUpdate("CASCADE");
      tbl
        .integer("ingredients_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete("RESTRICT") // what happens if the publisher with this id is deleted
        .onUpdate("CASCADE"); // what happens if the publisher id changes
      // CASCADE, SET NULL , DO NOTHING, RESTRICT
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropIfItExists("recipe_ingredients")
    .dropIfItExists("ingredients")
    .dropIfItExists("recipes");
};
