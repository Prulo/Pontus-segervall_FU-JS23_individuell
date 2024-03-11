import React, { useEffect, useState } from 'react';
import "../abstracts/Menu.scss";
import Nav from "../components/Nav";
import Cart from "../components/Cart";
import add from "../logos/add.png";

const Menu: React.FC = () => {
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const [error, setError] = useState<any | null>(null);
  const [cartItems, setCartItems] = useState<any[]>([]);
console.log(cartItems)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://airbean-api-xjlcn.ondigitalocean.app/api/beans/');
        if (!response.ok) {
          throw new Error('Failed to fetch menu items');
        }

        const data = await response.json();
        if (data.success) {
          setMenuItems(data.menu);
        } else {
          throw new Error('No data available');
        }
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  const addToCart = (item: any) => {
    const existingItem = cartItems.find(cartItem => cartItem.title === item.title);
    if (existingItem) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.title === item.title ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const increaseQuantity = (index: number) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity++;
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (index: number) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity--;
    setCartItems(updatedCartItems);
  };
  
  return (
    <>
      <div className="wrapper-menu">
        <Nav />
        <Cart cartItems={cartItems} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />
        <main>
          {menuItems.map((item: any) => (
            <div key={item.id} className="product-container" onClick={() => addToCart(item)}>
              <img src={add} alt="Product" />
              <div className="header-product">
                <h1 className='header-kaffe'>{item.title}</h1>
                <p className='text-kaffe'>{item.desc}</p>
              </div>
              <p className='pris-kaffe'>{item.price} kr</p>
            </div>
          ))}
        </main>
      </div>
    </>
  );
};

export default Menu;