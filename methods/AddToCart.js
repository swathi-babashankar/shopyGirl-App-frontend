
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

export const  AddToCart = async (_id, qty, userId, size) => {

    // const [products, setProduct] = useState({});
    // // const [qty, setQty] = useState(1);
    // const navigate = useNavigate()

    // const userId = useSelector(state => state.persistedReducer.userAuthSlice.userData?._id)
    // console.log(userId);

    // const dispatch = useDispatch()

    try {

        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/addToCart/?prodId=${_id}&userId=${userId}`,{quantity: qty, size: size}, {withCredentials: true} );
        console.log(response);
        return response;
    }

    catch(e){
        console.log(e);

    }
}
