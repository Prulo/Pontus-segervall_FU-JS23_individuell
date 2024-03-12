import React, { useEffect, useState } from "react";
import "../abstracts/Menu.scss";
import Nav from "../components/Nav";
import Cart from "../components/Cart";
import add from "../logos/add.png";

interface MenuItem {
  id: number;
  title: string;
  desc: string;
  price: number;
}

const Menu: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [cartItems, setCartItems] = useState<any[]>([]);
  console.log(cartItems);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://airbean-api-xjlcn.ondigitalocean.app/api/beans/"
        );

        const data = await response.json();
        if (data.success) {
          setMenuItems(data.menu);
        } 
      } catch (error) {
        console.log("Dog shit")
      }
    };

    fetchData();
  }, []);

  const addToCart = (item: MenuItem) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem.title === item.title
    );
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.title === item.title
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const increase = (index: number) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity++;
    setCartItems(updatedCart);
  };

  const decrease = (index: number) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 0) {
      updatedCart[index].quantity--;
    }
    setCartItems(updatedCart);
  };

  return (
    <>
      <div className="wrapper-menu">
        <Nav />
        <Cart
          cartItems={cartItems}
          increase={increase}
          decrease={decrease}
        />
        <main>
          {menuItems.map((item: MenuItem) => (
            <div
              key={item.id}
              className="product-container"
              onClick={() => addToCart(item)}
            >
              <img src={add} alt="Product" />
              <div className="header-product">
                <h1 className="header-kaffe">{item.title}</h1>
                <p className="text-kaffe">{item.desc}</p>
              </div>
              <p className="pris-kaffe">{item.price} kr</p>
            </div>
          ))}
        </main>
      </div>
    </>
  );
};

export default Menu;
