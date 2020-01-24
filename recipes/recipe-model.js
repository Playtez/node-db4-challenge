const db = require("../data/dbConfig");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}
function getShoppingList(id) {
  return db
    .select("ri.quantity", "i.ingredient_name")
    .from("recipe_ingredients as ri")
    .join("ingredients as i", "ri.ingredients_id", "i.id")
    .join("recipes as r", "ri.recipe_id", "r.id")
    .where("r.id", id);
}

function getInstructions(id) {
  return db
    .select("instructions")
    .from("recipes")
    .where("id", id);
}
