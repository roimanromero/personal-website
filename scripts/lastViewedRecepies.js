document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('lastRecipeCardsContainer');
    const lastViewedRecipes = JSON.parse(localStorage.getItem('lastRecipes'));

    if (lastViewedRecipes) {
        lastViewedRecipes.slice(0, 3).forEach(recipe => {
            const card = document.createElement('div');
            card.className = 'recipe-card';
            
            const ingredients = recipe.ingredients.slice(0, 5).map(ingredient => ingredient.name).join(', ');
            card.innerHTML = `
                <h3>${recipe.title}</h3>
                <p>Ingredients: ${ingredients}</p>
            `;

            card.addEventListener('click', function() {
                localStorage.setItem('selectedRecipe', JSON.stringify(recipe));
                window.location.href = 'recipeDetails.html';
            });

            container.appendChild(card);
        });
    }
});
