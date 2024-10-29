document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('lastRecipeCardsContainer');
    const lastViewedRecipes = JSON.parse(localStorage.getItem('lastRecipes'));

    if (lastViewedRecipes && lastViewedRecipes.length > 0) {
        lastViewedRecipes.forEach(recipe => {
            const card = document.createElement('div');
            card.className = 'recipe-card';

            card.innerHTML = `
                <h3>${recipe.title}</h3>
            `;

            container.appendChild(card);
        });
    } else {
        container.innerHTML = "<p>No recipes saved recently.</p>";
    }
});
