exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          id: 1,
          recipe_name: "pizza",
          instructions: "this is how you make tasty pizza"
        },
        {
          id: 2,
          recipe_name: "chicken alfredo",
          instructions: "this is how you make tasty fredo"
        },
        {
          id: 3,
          recipe_name: "vodka",
          instructions: "this is how you make tasty vodka"
        }
      ]);
    });
};
