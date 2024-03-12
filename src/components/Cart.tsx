import React, { useState } from "react";
import bag from "../logos/bag.png";
import upp from "../logos/upp.png";
import ner from "../logos/ner.png";
import "../abstracts/Cart.scss";
import Button from "./Orderbutton";

interface CartItem {
  title: string;
  price: number;
  quantity: number;
  
}

interface CartProps {
  cartItems: CartItem[];
  increase: (index: number) => void;
  decrease: (index: number) => void;
}

const Cart: React.FC<CartProps> = ({cartItems,increase,decrease,}) => {
  
  const [openCart, setOpenCart] = useState(false);

  const handleClick = () => {
    setOpenCart(!openCart);
  };

  const Total = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className={`cart-menu ${openCart ? "openC" : ""}`}>
      <div className="cart-wrapper">
        <div className="image-cart" onClick={handleClick}>
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
                    <img
                      src={upp}
                      alt="upp"
                      onClick={() => increase(index)}
                    />
                    <p className="pris-kaffes">{item.quantity}</p>
                    <img
                      src={ner}
                      alt="ner"
                      onClick={() => decrease(index)}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="total-cart-box">
              <h1 className="total-cart">Total</h1>
              <p className="total-cart-price">{Total()} KR</p>
            </div>
            <p className="moms-cart">inkl moms + drönarleverans</p>
            <div className="button-cart-box">
              <Button cartItems={cartItems} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
