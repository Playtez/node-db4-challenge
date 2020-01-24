exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipe_ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_ingredients").insert([
        { id: 1, quantity: 2, recipe_id: 1, ingredients_id: 1 },
        { id: 2, quantity: 2, recipe_id: 1, ingredients_id: 3 }
      ]);
    });
};
