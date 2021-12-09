const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
}

const displayQuote = quote => {
    const quoteElement = document.getElementById('quote');
    const h2 = document.createElement('h2');
    h2.innerText = quote.quote;
    quoteElement.appendChild(h2);
}