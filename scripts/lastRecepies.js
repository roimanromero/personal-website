document.getElementById('lastRecipesButton').addEventListener('click', function() {
    const lastRecipesSection = document.getElementById('lastRecipesSection');
    const lastRecipes = JSON.parse(localStorage.getItem('lastRecipes'));

    if (lastRecipes) {
        lastRecipesSection.innerHTML = ''; // Clear any existing content

        lastRecipes.forEach(recipe => {
            const card = document.createElement('div');
            card.className = 'recipe-card';
            card.innerHTML = `<h3>${recipe.title}</h3>`;
            lastRecipesSection.appendChild(card);
        });

        lastRecipesSection.classList.toggle('show');
    }
});
