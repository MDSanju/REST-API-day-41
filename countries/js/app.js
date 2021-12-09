const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');



    // for (const country of countries) {
    //     const h3 = document.createElement('h3');
    //     h3.innerText = `Country Name: ${country.name}
    //     Native Name: ${country.nativeName}
    //     Region: ${country.region}`;
    //     countriesDiv.appendChild(h3);
    // }



    // another way to do it without writting for loop
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `<h3>Country Name: ${country.name}</h3>
        <h3>Native Name: ${country.nativeName}</h3>
        <h2>Capital: ${country.capital}</h2>
        <button onclick="loadCountryByName('${country.name}')">Details</button>`;
        countriesDiv.appendChild(div);
    });
}

const loadCountryByName = nameAny => {
    const url = `https://restcountries.eu/rest/v2/name/${nameAny}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = details => {
    const detailsDiv = document.getElementById('country-details');
    detailsDiv.innerHTML = `<h5>${details.name}</h5>
    <p>Population: ${details.population}</p>
    <img width="200px" src="${details.flag}">`;
}