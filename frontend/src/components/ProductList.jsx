import React, { useEffect, useState } from 'react';
    import axios from 'axios';

    const ProductList = () => {
      const [products, setProducts] = useState([]);

      useEffect(() => {
        axios.get('/api/products').then(response => {
          setProducts(response.data.products);
        });
      }, []);

      return (
        <div>
          {products.map(product => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      );
    };

    export default ProductList;
