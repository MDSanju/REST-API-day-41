const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    if (searchText == '') {
        const emptySearch = document.getElementById('empty-search');
        const h3 = document.createElement('h3');
        h3.innerText = `Please write something to get result!`;
        emptySearch.appendChild(h3);
    } else {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data => displaySearchResult(data.meals))
    }
}

const displaySearchResult = meals => {
    // console.log(meals);
    const searchResult = document.getElementById('search-result');

    // clear contents before searching
    searchResult.textContent = '';

    // show text on no result found
    if (!meals) {
        const noResultMessage = document.getElementById('empty-search');
        const h3 = document.createElement('h3');
        h3.innerText = `No result found!`;
        noResultMessage.appendChild(h3);
    } else {
        const noResultMessage = document.getElementById('empty-search');
        const h3 = document.createElement('h3');
        h3.innerText = `No result found!`;
        noResultMessage.textContent = '';
    }
    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetail('${meal.idMeal}')" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 300)}</p>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    });
}

const loadMealDetail = mealId => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]))
}

const displayMealDetail = meal => {
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
        <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    mealDetails.appendChild(div);
}