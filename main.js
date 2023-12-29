document.getElementById('getWeather').addEventListener('click', function() {
    var location = document.getElementById('location').value;
    fetch(`http://localhost:3000/weather?city=${encodeURIComponent(location)}`)
        .then(response => response.json())
        .then(data => {
            displayWeatherData(data);
            document.getElementById('searchSection').style.display = 'none';
            document.getElementById('resultsSection').style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});

function displayWeatherData(data) {
    var weatherDetails = document.getElementById('weatherDetails');
    weatherDetails.innerHTML = `
        <h2>📍 Location: ${data.name}</h2>
        <div>🌡️ Temperature: ${(data.main.temp - 273.15).toFixed(2)}°C</div>
        <div>🤔 Feels Like: ${(data.main.feels_like - 273.15).toFixed(2)}°C</div>
        <div>💧 Humidity: ${data.main.humidity}%</div>
        <div>🕛 Pressure: ${data.main.pressure} hPa</div>
        <div>💨 Wind Speed: ${data.wind.speed} m/s</div>
        <div>☁️ Cloudiness: ${data.clouds.all}%</div>
        <div>🌤️ Weather: ${data.weather[0].description}</div>
        <div>👁️ Visibility: ${data.visibility} meters</div>
        <div>🌅 Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</div>
        <div>🌇 Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</div>`;
}
document.getElementById('newSearch').addEventListener('click', function() {
    // Hide the results section
    document.getElementById('resultsSection').style.display = 'none';
    // Show the search section
    document.getElementById('searchSection').style.display = 'block';
    // Optionally, clear the previous search input
    document.getElementById('location').value = '';
});

