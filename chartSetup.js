let temperatureChart; // Global chart variable

function updateTemperatureChart(data) {
    var ctx = document.getElementById('temperatureChart').getContext('2d');
    
    // If the chart already exists, destroy it to avoid overwriting issues
    if (temperatureChart) {
        temperatureChart.destroy();
    }

    // Create a new chart
    temperatureChart = new Chart(ctx, {
        type: 'line', // Example: line chart
        data: {
            labels: ['Now'], // Adjust based on available data
            datasets: [{
                label: 'Temperature',
                data: [data.main.temp - 273.15], // Convert Kelvin to Celsius
                backgroundColor: 'rgba(0, 123, 255, 0.5)',
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });
}
