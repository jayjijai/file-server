const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files from 'public' folder
app.use(express.static("public"));

// Route to download encrypter.exe
app.get("/download", (req, res) => {
  const filePath = path.join(__dirname, "public", "encrypter.exe");

  res.download(filePath, "encrypter.exe", (err) => {
    if (err) {
      console.error("Error downloading file:", err);
      res.status(500).send("Error downloading file.");
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
