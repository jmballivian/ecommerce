const express = require('express');
    const router = express.Router();

    router.get('/products', (req, res) => {
      // Fetch products from database
      res.json({ products: [] });
    });

    module.exports = router;
