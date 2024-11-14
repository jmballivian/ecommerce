
    import React, { useEffect, useState } from 'react';
    import axios from 'axios';
    import { Card, Row, Col } from 'antd';

    const Home = () => {
      const [products, setProducts] = useState([]);

      useEffect(() => {
        const fetchProducts = async () => {
          const response = await axios.get('/api/products');
          setProducts(response.data);
        };

        fetchProducts();
      }, []);

      return (
        <Row gutter={[16, 16]}>
          {products.map(product => (
            <Col span={6} key={product.id}>
              <Card title={product.name} cover={<img alt={product.