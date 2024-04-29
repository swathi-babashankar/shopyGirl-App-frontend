import { Link } from 'react-router-dom'
import './cart.css'

export default function Cart({img, name, price}){

    return(

        <div className="main-div">
            <div className="cart-div">
                {/* check if there is anything in cart if nothing display "YOUR CART IS EMPTY" */}
                {/* This div will be inside map to shoe the products added to  cart  */}
                <div className="cCard">
                    <img className="cpImg" src="" alt="" width={300} />

                    <div className="prodInfo">
                      <p className="cpName">First product</p>
                      <p className="cpPrice">₹3900</p>
                      <input type="number" name="quantity" className="qty" />
                    </div>

                    <button className="removeBtn">Remove</button>
                </div>
                <Link to="/order">
                <button className="orderBtn" type="button">Place Order</button>
                </Link>
            </div>
        </div>
    )
}