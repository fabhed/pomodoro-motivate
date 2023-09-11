const express = require("express");
const path = require("path");
const axios = require("axios");
const app = express();
const port = 8080;

// Serve the public directory
app.use(express.static(path.join(__dirname, "public")));

app.get("/weather", async (req, res) => {
  try {
    const response = await axios.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=YOUR_API_KEY");
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching weather data");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
