import "./viewCoupon.css"

export default function ViewCoupon({disount, validTill, couponCode}){

    return(

        <div className="main-div">

            <div className="cView">
                <p className="cCode">Code <span>{couponCode}</span></p>
                <p className="disc">{disount}% Off</p>
                <p className="vDate">Valid Till <span>{validTill}</span></p>
            </div>

        </div>
    )
}