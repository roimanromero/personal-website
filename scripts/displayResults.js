// Updated displayResults.js
document.addEventListener('DOMContentLoaded', function () {
    const resultsContainer = document.getElementById('recipeCardsContainer');
    const searchResults = JSON.parse(localStorage.getItem('searchResults'));

    if (searchResults && searchResults.length > 0) {
        searchResults.forEach(recipe => {
            const card = document.createElement('div');
            card.className = 'recipe-card';

            // Display up to 5 ingredients
            const ingredients = recipe.extendedIngredients
                ? recipe.extendedIngredients.slice(0, 5).map(ingredient => ingredient.name).join(', ')
                : 'Ingredients unavailable';

            card.innerHTML = `
                <h3>${recipe.title}</h3>
                <p>Ingredients: ${ingredients}</p>
            `;

            // Set up click event to navigate to recipe details
            card.addEventListener('click', function () {
                localStorage.setItem('selectedRecipe', JSON.stringify(recipe));
                window.location.href = 'recipeDetails.html';
            });

            resultsContainer.appendChild(card);
        });
    } else {
        resultsContainer.innerHTML = "<p>No results found. Please try a different search.</p>";
    }
});
