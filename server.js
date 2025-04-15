const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    if (!email) {
      return res.status(400).json({ error: "Email cannot be empty" });
    }
  
    if (!password) {
      return res.status(400).json({ error: "Password cannot be empty" });
    }
  
    // Dummy check
    if (email === "admin@example.com" && password === "password123") {
      return res.status(200).json({ message: "Login successful" });
    } else {
      return res.status(401).json({ error: "Invalid credentials" });
    }
  });
  