import React, { useEffect, useState } from 'react';
import "../abstracts/Menu.scss";
import Nav from "../components/Nav";
import Cart from "../components/Cart";
import add from "../logos/add.png";

const Menu: React.FC = () => {
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const [error, setError] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://airbean-api-xjlcn.ondigitalocean.app/api/beans/');
        if (!response.ok) {
          throw new Error('dogshit');
        }
  
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          if (data.success) {
            setMenuItems(data.menu);
          } else {
            throw new Error('no data');
          }
        }
      } catch (error) {
        setError(error);
      }
    };
  
    fetchData();
  }, []);

  

  console.log(menuItems)
  return (
    <>
      <div className="wrapper-menu">
        <Nav />
        <Cart />
        <main>
          {menuItems.map((item: any) => (
            <div key={item.id} className="product-container">
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