// Updated search.js
document.getElementById('searchButton').addEventListener('click', function () {
    const query = "mango " + document.getElementById('searchBar').value.trim();

    if (query) {
        const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=05f2a7c1652b4ba28e3a386d6a1ab30c&addRecipeInformation=true&number=10`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(data => {
                if (data.results && data.results.length > 0) {
                    localStorage.setItem('searchResults', JSON.stringify(data.results));
                    window.location.href = 'searchResults.html';
                } else {
                    alert("No recipes found. Try another search term.");
                }
            })
            .catch(error => console.error('Fetch error:', error));
    } else {
        alert("Please enter a search term.");
    }
});
