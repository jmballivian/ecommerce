const express = require('express');
    const bcrypt = require('bcrypt');
    const { check, validationResult } = require('express-validator');
    const User = require('../../models/User');

    const router = express.Router();

    router.post(
      '/register',
      [
        check('email').isEmail().withMessage('Invalid email'),
        check('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
        check('fullName').not().isEmpty().withMessage('Full name is required'),
        check('phoneNumber').not().isEmpty().withMessage('Phone number is required'),
        check('address').not().isEmpty().withMessage('Address is required')
      ],
      async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

        const { email, password, fullName, phoneNumber, address } = req.body;

        try {
          const hashedPassword = await bcrypt.hash(password, 10);
          const user = await User.create({
            email,
            password: hashedPassword,
            fullName,
            phoneNumber,
            address
          });

          res.status(201).json(user);
        } catch (error) {
          res.status(500).json({ message: 'Registration failed' });
        }
      }
    );

    module.exports = router;
