import React, { useEffect, useState } from "react";
import "../abstracts/Menu.scss";
import Nav from "../components/Nav";
import Cart from "../components/Cart";
import add from "../logos/add.png";

interface Menu {
  id: number;
  title: string;
  desc: string;
  price: number;
}

const Menu: React.FC = () => {
  const [menu, setMenu] = useState<Menu[]>([]);
  const [cart, setCart] = useState<any[]>([]);
  console.log(cart);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://airbean-api-xjlcn.ondigitalocean.app/api/beans/"
        );

        const data = await response.json();
        if (data.success) {
          setMenu(data.menu);
        } 
      } catch (error) {
        console.log("Dog shit")
      }
    };

    fetchData();
  }, []);

  const addToCart = (item: Menu) => {
    const existingItem = cart.find(
      (cartItem) => cartItem.title === item.title
    );
    if (existingItem) {
      setCart(
        cart.map((cart) =>
          cart.title === item.title
            ? { ...cart, quantity: cart.quantity + 1 }
            : cart
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const increase = (index: number) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity++;
    setCart(updatedCart);
  };

  const decrease = (index: number) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 0) {
      updatedCart[index].quantity--;
    }
    setCart(updatedCart);
  };

  return (
    <>
      <div className="wrapper-menu">
        <Nav />
        <Cart
          cartItems={cart}
          increase={increase}
          decrease={decrease}
        />
        <main>
          {menu.map((item: Menu) => (
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
