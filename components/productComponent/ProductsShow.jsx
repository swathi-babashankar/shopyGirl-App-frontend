import { Link } from 'react-router-dom'

import './products.css'

export default function ProductShow({name, price, images}){
    return(
        
        <div className="show-div">
            
            <div className="card-div">
            <Link to="/productDetails">
                <img className="pImg" src={images} alt="" width={150} height={150}/>
            </Link>
                <p className="pdName">{name}</p>
                <p className="pdPrice">₹<span> {price}</span></p>
                <button className="addCart">Add To Cart</button> <button className="buynow">Buy Now</button> 
            </div>  
            
        </div>
        

      
    )
}