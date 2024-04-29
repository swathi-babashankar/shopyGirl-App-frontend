import "./styles/order.css";

export default function Order(){

    return(

        <div className="main-div">
            
          <div className="formDiv">
            <form className="orderForm" action="post" >
                <input type="text" className="name" placeholder="Name"/>
                <input type="text" className="address" placeholder="Address"/>
                <input type="text" className="ph" placeholder="Phone No"/>
                <input type="text" className="cCode" placeholder="Coupon Code"/>

                <button className="order" type="submit">Order</button>
            </form>
          </div>

        </div>
    )
}