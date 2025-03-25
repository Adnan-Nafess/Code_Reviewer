const express = require("express");
const aiRoutes = require("./routes/ai.routes");
const cors = require("cors");

const app = express();

const corsOptions = {
    origin: "https://code-reviewer-ifah.vercel.app", 
    methods: "POST",
    credentials: true,
  };
  
app.use(cors(corsOptions));
app.use(express.json());
app.use("/ai", aiRoutes);

app.get("/", (req, res) => {
    res.send("Hello world");
});

module.exports = app;  // ✅ Ensure this line exists
