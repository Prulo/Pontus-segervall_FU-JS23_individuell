import { Link } from 'react-router-dom';
import Vector from "../logos/Vector.png"
import "../abstracts/Landing.scss"

const Landing = () => {
  return (
  <Link to="/menu" className="link">
    <div className='picture'>
    <div className="wrapper">
      <div className='img-box-landing'>
      <img className="img" src={Vector} alt="Cant find pic" />
      </div>
      <h1 className='header-landing'>AIR BEAN</h1>
      <p className='text-landing'>DRONEDELIVERED COFFEE</p>
        
    </div>
    </div>
    </Link>
  )
}

export default Landing