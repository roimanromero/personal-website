// Fetch data from mangoData.json and display it on the webpage
fetch('data/mangoData.json')
    .then(response => response.json())
    .then(data => {
        const recipeContainer = document.getElementById('recipeCardsContainer');
        const triviaContainer = document.getElementById('triviaContainer');

        // Display recipes
        data.recipes.forEach(recipe => {
            const card = document.createElement('div');
            card.className = 'recipe-card';
        
            card.innerHTML = `
                <div class="card-inner">
                    <div class="card-front">
                        <h3>${recipe.title}</h3>
                        <p>Cooking Time: ${recipe.cookingTime} mins | Servings: ${recipe.servings}</p>
                    </div>
                    <div class="card-back">
                        <img src="${recipe.image}" alt="${recipe.title}">
                    </div>
                </div>
            `;
        
            // Click event to save recipe data and redirect to recipeDetails.html
            card.addEventListener('click', () => {
                localStorage.setItem('selectedRecipe', JSON.stringify(recipe));
                window.location.href = 'recipeDetails.html';
            });
        
            recipeContainer.appendChild(card);
        });
        
        // Display trivia
        data.trivia.forEach(item => {
            const triviaFact = document.createElement('p');
            triviaFact.textContent = item.fact;
            triviaContainer.appendChild(triviaFact);
        });
    })
    .catch(error => console.error('Error loading JSON data:', error));

function showRecipeDetails(recipeId) {
    alert(`Show details for recipe ID: ${recipeId}`);
}
