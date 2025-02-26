function generateQuote(){
    document.querySelector('.quote-container p').textContent = 'Loading...'

    fetch('https://api.breakingbadquotes.xyz/v1/quotes')
    
    .then(response => response.json())
    .then(data => {
        document.querySelector('.quote-container p').textContent = data[0].quote
        document.querySelector('.quote-container span').textContent = "-" + data[0].author
    })
}


document.querySelector('.quote-container').addEventListener('click', generateQuote)

generateQuote()