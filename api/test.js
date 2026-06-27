module.exports = function (req, res) {
  res.json({ status: "backend working", apiKey: process.env.GOOGLE_API_KEY ? "✓ set" : "✗ missing" });
};
