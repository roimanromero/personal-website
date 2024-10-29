document.addEventListener('DOMContentLoaded', function () {
    const resultsContainer = document.getElementById('recipeCardsContainer');
    const saveButton = document.getElementById('saveRecipesButton');
    const searchResults = JSON.parse(localStorage.getItem('searchResults'));
    let selectedRecipes = [];

    if (searchResults && searchResults.length > 0) {
        searchResults.forEach(recipe => {
            const card = document.createElement('div');
            card.className = 'recipe-card';

            card.innerHTML = `
                <h3>${recipe.title}</h3>
                <span class="checkmark hidden">&#10003;</span>
            `;

            // Handle card selection
            card.addEventListener('click', function () {
                const checkmark = card.querySelector('.checkmark');
                if (selectedRecipes.includes(recipe)) {
                    // Deselect
                    selectedRecipes = selectedRecipes.filter(r => r.id !== recipe.id);
                    checkmark.classList.add('hidden');
                } else {
                    // Select
                    selectedRecipes.push(recipe);
                    checkmark.classList.remove('hidden');
                }
            });

            resultsContainer.appendChild(card);
        });
    } else {
        resultsContainer.innerHTML = "<p>No results found. Please try a different search.</p>";
    }

    // Save selected recipes
    saveButton.addEventListener('click', function () {
        if (selectedRecipes.length > 0) {
            localStorage.setItem('lastRecipes', JSON.stringify(selectedRecipes.slice(-3))); // Save last 3 selected recipes
            alert("Selected recipes saved!");
            window.location.href = 'lastRecipes.html';
        } else {
            alert("No recipes selected.");
        }
    });
});
