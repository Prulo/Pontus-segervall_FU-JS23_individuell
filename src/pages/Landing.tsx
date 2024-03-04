import { Link } from 'react-router-dom';
import Vector from "../logos/Vector.png"
import "../abstracts/Landing.scss"

const Landing = () => {
  return (
  <Link to="/menu" className="link">
    <div className='picture'>
    <div className="wrapper">
      
      <img className="img" src={Vector} alt="Cant find pic" />
      <h1>AIR BEAN</h1>
      <p>DRONEDELIVERED COFFEE</p>
        
    </div></div></Link>
  )
}

export default Landing