document.querySelector('button').addEventListener('click', function() {
    alert('Button was clicked!');
});

window.addEventListener('load', function() {
    fetch('/weather')
        .then(response => response.json())
        .then(data => {
            const weatherElement = document.getElementById('weather');
            weatherElement.textContent = `Current weather: ${data.weather[0].description}, temperature: ${data.main.temp}K`;
        })
        .catch(error => console.error('Error:', error));
});
