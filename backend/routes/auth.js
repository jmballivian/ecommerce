const express = require('express');
    const router = express.Router();
    const { body, validationResult } = require('express-validator');
    const bcrypt = require('bcrypt');
    const jwt = require('jsonwebtoken');

    router.post('/register', [
      body('email').isEmail(),
      body('password').isLength({ min: 8 })
    ], async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);

      // Save user to database
      res.json({ message: 'User registered successfully' });
    });

    router.post('/login', async (req, res) => {
      const { email, password } = req.body;

      // Check if user exists and password matches
      const token = jwt.sign({ email }, 'secret_key');
      res.json({ token });
    });

    module.exports = router;
