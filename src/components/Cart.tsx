import React, { useState } from 'react';
import bag from "../logos/bag.png";
import upp from "../logos/upp.png";
import ner from "../logos/ner.png";
import "../abstracts/Cart.scss";
import { placeOrder } from './GlobalStats';

interface CartProps {
  cartItems: any[];
  increaseQuantity: (index: number) => void;
  decreaseQuantity: (index: number) => void;
  onOrderPlaced: (orderData: any) => void; // Ensure this prop is correctly defined
}

const Cart: React.FC<CartProps> = ({ cartItems, increaseQuantity, decreaseQuantity, onOrderPlaced }) => {
  const [openCart, setOpenCart] = useState(false);

  const handleCartClick = () => {
    setOpenCart(!openCart);
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const placeOrderHandler = () => {
    // Call the placeOrder function from GlobalStats
    placeOrder(cartItems, onOrderPlaced);
  };

  return (
    <div className={`cart-menu ${openCart ? "openC" : ""}`}>
      <div className="cart-wrapper">
        <div className="image-cart" onClick={handleCartClick}>
          <img className="pic-cart" src={bag} alt="error" />
          <div className="image-cart-small">
            <p className="product-counter">{totalItems}</p>
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
                    <p className="text-kaffe">{item.price} kr</p>
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
              <p className="total-cart-price">{calculateTotal()} KR</p>
            </div>
            <p className="moms-cart">inkl moms + drönarleverans</p>
            <div className="button-cart-box">
              {/* Call placeOrderHandler function when the button is clicked */}
              <button className="cart-button" onClick={placeOrderHandler}>Take my money!</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

