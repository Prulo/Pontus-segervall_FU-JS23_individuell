import React, { useState } from "react";
import bag from "../logos/bag.png";
import upp from "../logos/upp.png";
import ner from "../logos/ner.png";
import "../abstracts/Cart.scss";

interface CartProps {
  cartItems: any[];
}

const Cart: React.FC<CartProps> = ({ cartItems }) => {
  const [openCart, setOpenCart] = useState(false);

  const handleCartClick = () => {
    setOpenCart(!openCart);
  };

  const increaseQuantity = (index: number) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity++;
    // Update state with the new array
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (index: number) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity--;
    // Update state with the new array
    setCartItems(updatedCartItems);
  };

  return (
    <div className={`cart-menu ${openCart ? "openC" : ""}`}>
      <div className="cart-wrapper">
        <div className="image-cart" onClick={handleCartClick}>
          <img className="pic-cart" src={bag} alt="error" />
          <div className="image-cart-small">
            <p className="product-counter">{cartItems.length}</p>
          </div>
        </div>
        {openCart && (
          <div className="cart-content">
            <h1 className="header-cart-box">Din beställning</h1>
            <div className="order-cartbox">
              {cartItems.map((item: any, index: number) => (
                <div key={index} className="cart-item">
                  <div>
                    <h1 className="header-kaffe">{item.title}</h1>
                    <p className="text-kaffe">{item.price}</p>
                  </div>
                  <div className="cart-upp-ner">
                  <img src={upp} alt="upp" onClick={() => increaseQuantity(index)} />
                    <p className="pris-kaffes">{item.quantity}</p>
                    <img src={ner} alt="ner" onClick={() => decreaseQuantity(index)} />
                  </div>
                </div>
              ))}
            </div>
            <div className="total-cart-box">
              <h1 className="total-cart">Total</h1>
              <p className="total-cart-price">243 KR</p>
            </div>
            <p className="moms-cart">inkl moms + drönarleverans</p>
            <div className="button-cart-box">
              <button className="cart-button">Take my money!</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

