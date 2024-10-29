// Updated displayResults.js
document.addEventListener('DOMContentLoaded', function() {
    const resultsContainer = document.getElementById('recipeCardsContainer');
    const lastRecipes = JSON.parse(localStorage.getItem('lastRecipes'));

    if (lastRecipes) {
        lastRecipes.forEach(recipe => {
            const card = document.createElement('div');
            card.className = 'recipe-card';
            
            const ingredients = recipe.ingredients.slice(0, 5).map(ingredient => ingredient.name).join(', ');
            card.innerHTML = `
                <h3>${recipe.title}</h3>
                <p>Ingredients: ${ingredients}</p>
            `;
            
            // Set up click event to navigate to recipe details
            card.addEventListener('click', function() {
                localStorage.setItem('selectedRecipe', JSON.stringify(recipe));
                window.location.href = 'recipeDetails.html';
            });

            resultsContainer.appendChild(card);
        });
    }
});
