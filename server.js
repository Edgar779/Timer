const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

// Serve static HTML, CSS and JS files
app.use(express.static(path.join(__dirname, "public")));

// API endpoint
app.get("/api/status", (req, res) => {
    res.json({ status: "Server is running!" });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});