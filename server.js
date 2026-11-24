const express = require("express");

// 1. Create Express application
const app = express();

// 2. Configure middleware
app.use(express.json());

// 3. Define routes
app.get("/", (req, res) => {
    res.json({
        message: "My server is running!",
        status: "success"
    });
});

app.get("/health", (req, res) => {
    res.json({ status: "healthy" });
});

// 4. Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});