document.addEventListener('DOMContentLoaded', function() {
    const recipeContainer = document.getElementById('recipeDetailContainer');
    const selectedRecipe = JSON.parse(localStorage.getItem('selectedRecipe'));

    if (selectedRecipe) {
        recipeContainer.innerHTML = `
            <h2>${selectedRecipe.title}</h2>
            <p>Ingredients: ${selectedRecipe.ingredients.map(ingredient => ingredient.name).join(', ')}</p>
            <p>Instructions: ${selectedRecipe.instructions}</p>
        `;
    }
});
