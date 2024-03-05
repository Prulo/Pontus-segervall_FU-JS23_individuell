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
            <h1>Din beställning</h1>
            <div>
              <h1 className='header-kaffe'>Byggkaffe{}</h1>
              <p className='text-kaffe'>98kr{}</p>
            </div>
            <div>
              <img src={upp} alt="upp" />
              <p className='pris-kaffe'>2{}</p>
              <img src={ner} alt="ner" />
            </div>
            <div>
              <h1>Total</h1>
              <p>243 KR</p>
            </div>
            <p>inkl moms + drönarleverans</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
