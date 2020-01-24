exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { id: 1, ingredient_name: "pepperoni" },
        { id: 2, ingredient_name: "noodles" },
        { id: 3, ingredient_name: "beef" },
        { id: 4, ingredient_name: "chicken" }
      ]);
    });
};
