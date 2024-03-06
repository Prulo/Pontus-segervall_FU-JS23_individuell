import React, { useState } from "react";
import bag from "../logos/bag.png";
import upp from "../logos/upp.png"
import ner from "../logos/ner.png"
import "../abstracts/Cart.scss";

const Cart: React.FC = () => {
  const [openCart, setOpenCart] = useState(false);

  const handleCartClick = () => {
    setOpenCart(!openCart);
  };

  return (
    <div className={`cart-menu ${openCart ? "openC" : ""}`}>
      <div className="cart-wrapper">
        <div className="image-cart" onClick={handleCartClick}>
          <img className="pic-cart" src={bag} alt="error" />
          <div className="image-cart-small">
            <p className="product-counter">1</p>
          </div>
        </div>
        {openCart && (
          <div className="cart-content">
            <h1 className="header-cart-box">Din beställning</h1>
            <div className="order-cartbox">
            <div>
              <h1 className='header-kaffe'>Byggkaffe...............................{}</h1>
              <p className='text-kaffe'>98 kr{}</p>
            </div>
            <div className="cart-upp-ner">
              <img src={upp} alt="upp" />
              <p className='pris-kaffes'>2{}</p>
              <img src={ner} alt="ner" />
            </div>
            </div>
            <div className="total-cart-box">
              <h1>Total</h1>
              <p className="total-cart-price">243 KR</p>
            </div>
            <p>inkl moms + drönarleverans</p>
            <div>
              <button>Take my money!</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
