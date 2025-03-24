const aiService = require("../services/ai.service");

const getReview = async (req, res) => {
    try {
        const prompt = req.body.code;

        if (!prompt) {
            return res.status(400).send("Prompt is required");
        }

        const response = await aiService.generateContent(prompt);  // ✅ Correct function call

        res.send(response);
    } catch (error) {
        console.error("AI Service Error:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
};

module.exports = { getReview };