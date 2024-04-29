// Show all orders of the particular user
import "./styles/viewOrder.css"
export default function ViewOrders({img, name, price, date}){

    return(

        <div className="main-div">
            
            <div className="view-div">
                <img className="p-img" src={img} alt={name} />
                <p className="oName">{name}</p>
                <p className="oPrice"> ₹ {price}</p>
                <p className="oDate">{date}</p>
            </div>
          
        </div>
    )
}