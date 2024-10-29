document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchBar').value;
    if (query) {
        fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=05f2a7c1652b4ba28e3a386d6a1ab30c`)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('lastRecipes', JSON.stringify(data.results.slice(0, 5)));
                window.location.href = 'searchResults.html';
            })
            .catch(error => console.error('Error fetching recipes:', error));
    }
});
