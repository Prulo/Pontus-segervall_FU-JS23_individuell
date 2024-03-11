import { create } from 'zustand';

export const placeOrder = (cartItems, onOrderPlaced) => {
  const Body = {
    details: {
      order: cartItems.map(item => ({
        name: item.title,
        price: item.price
      }))
    }
  };

  const Options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(Body)
  };
  
  fetch('https://airbean-api-xjlcn.ondigitalocean.app/api/beans/order', Options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Bad');
      }
      return response.json();
    })
    .then(data => {
      console.log('Order placed successfully:', data);
      onOrderPlaced(data); // Pass order data to the parent component
    })
    .catch(error => {
      console.error('Error placing order:', error);
      // Handle error
    });
};



