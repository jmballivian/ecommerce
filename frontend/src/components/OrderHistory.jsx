import React, { useEffect, useState } from 'react';
    import axios from 'axios';

    const OrderHistory = () => {
      const [orders, setOrders] = useState([]);

      useEffect(() => {
        axios.get('/api/orders').then(response => {
          setOrders(response.data.orders);
        });
      }, []);

      return (
        <div>
          {orders.map(order => (
            <div key={order.id}>
              <h3>Order #{order.id}</h3>
              <p>Status: {order.status}</p>
            </div>
          ))}
        </div>
      );
    };

    export default OrderHistory;
