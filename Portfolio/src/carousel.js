// server.js
const express = require("express");
const path = require("path");

const app = express();

// Serve static files (your HTML/CSS/JS)
app.use(express.static(path.join(__dirname, "public")));

// Home (optional)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "reviews.html"));
});

app.listen(3000, () => console.log("Server running on port 3000"));
