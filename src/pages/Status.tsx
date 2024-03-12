import { useOrderStore } from "../components/Zustand";
import "../abstracts/Status.scss"
import drone from "../logos/Group 5.png"
import { Link } from "react-router-dom";

const Status = () => {
  const orderData = useOrderStore((state) => state.orderData);
  if (!orderData) {
    return <div>Slowest app in the world lol</div>;
  }
  const { orderNr, eta } = orderData;
  return (
    <div className="status-wrapper">
      <div className="status-order-wrapper">
      <p className="status-ordernr">Ordernummer</p>
      <p className="status-ordernr-two">#{orderNr}</p>
      </div>
      <img src={drone} alt="Drönare" className="status-pic"/>
      <h1 id="status-header">Din beställning</h1>
      <h1 id="status-header">är på väg!</h1>
      <div className="status-eta-wrapper">
      <p className="status-eta">{eta}</p>
      <p className="status-eta-text">minuter</p> 
       </div>
       <Link to="/menu" className="status-link">
      <button className="status-button">Ok, cool!</button>
      </Link>
    </div>
  );
};

export default Status;
