//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector("button").addEventListener("click", getCocktail);

function getCocktail (){
    input = document.querySelector("input").value;
    url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + input
    fetch(url)
    .then(response => response.json())
    .then(data => (data.drinks[0]))
    .then(data =>
        
        (document.querySelector("img").src = data.strDrinkThumb,
        document.querySelector("h3").textContent = data.strInstructions,
        document.querySelector("h2").textContent = data.strDrink))
    .catch(error => alert(error))
}