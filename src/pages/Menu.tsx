
import React, { useEffect, useState } from 'react';
import "../abstracts/Menu.scss";
import Nav from "../components/Nav";
import add from "../logos/add.png"



const Menu: React.FC = () => {
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://airbean-api-xjlcn.ondigitalocean.app/api/beans/');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
  <>
    <Nav />
    <div className="wrapper-menu">
      <main>
      <div className="product-container">
      <img src={add} alt="Error" />
      <div className="header-product">
      <h1>byggkaffe</h1>
      <p>hsdgshdf</p>
      </div>
      <p>23kr</p>
      </div>
      </main>
      <div className="wrapper-menu-footer">
      </div>
    </div>
    </>
  );
};

export default Menu;