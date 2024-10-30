document.addEventListener('DOMContentLoaded', () => {
    const recipeDetailContainer = document.getElementById('recipeDetailContainer');
    const selectedRecipe = JSON.parse(localStorage.getItem('selectedRecipe'));

    if (selectedRecipe) {
        recipeDetailContainer.innerHTML = `
            <h2>${selectedRecipe.title}</h2>
            <img src="${selectedRecipe.image}" alt="${selectedRecipe.title}">
            <p><strong>Cooking Time:</strong> ${selectedRecipe.cookingTime} mins</p>
            <p><strong>Servings:</strong> ${selectedRecipe.servings}</p>
            <h3>Ingredients:</h3>
            <ul>
                ${selectedRecipe.ingredients.map(ingredient => `<li>${ingredient.quantity} of ${ingredient.name}</li>`).join('')}
            </ul>
            <h3>Instructions:</h3>
            <p>${selectedRecipe.instructions}</p>
            <h3>Nutrition Information:</h3>
            <p>Calories: ${selectedRecipe.nutrition.calories} kcal</p>
            <p>Protein: ${selectedRecipe.nutrition.protein}</p>
            <p>Fat: ${selectedRecipe.nutrition.fat}</p>
            <p>Carbs: ${selectedRecipe.nutrition.carbs}</p>
        `;
    } else {
        recipeDetailContainer.innerHTML = "<p>Recipe not found. Please go back and select a recipe.</p>";
    }
});
