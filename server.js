const express = require('express');
const cors = require('cors');
const app = express();
// Define an async function to dynamically import and use node-fetch
app.use(cors());
const fetch = async (...args) => {
    const module = await import('node-fetch');
    return module.default(...args);
};

app.get('/weather', async (req, res) => {
    console.log("Accessing /weather route");
    const apiKey = 'YOUR_API_KEY';
    const location = req.query.city || 'London';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
