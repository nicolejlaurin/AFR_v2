// server.js
const express = require('express');
const axios = require('axios');
const app = express();

app.get('/api/reviews', async (req, res) => {
  const apiKey = 'YOUR_API_KEY';
  const placeId = 'YOUR_PLACE_ID';
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    res.json(response.data.result.reviews);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
