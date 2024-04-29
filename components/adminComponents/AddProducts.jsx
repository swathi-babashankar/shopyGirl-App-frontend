import "./styles/addProduct.css";

import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../features/admin/addProductSlice";
import { useNavigate } from "react-router-dom";

export default function AddProduct(){

    const [prodName, setProdName] = useState("");
    const [prodBrand, setProdBrand] = useState("");
    const [prodPrice, setProdPrice] = useState(0);
    const [category, setCategory] = useState("");
    const [prodImage, setProdImage] = useState("");
    const [prodDiscount, setProdDiscount] = useState(0);
    const [error, setError] = useState(null);
    const [successMsg, setSuccessMsg] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const adminId = useSelector(state => state.persistedReducer.adminAuthSlice.adminData.adminLoggedIn._id)
    const selector = useSelector(state => state.persistedReducer.addProductSlice.products)
    console.log(selector);

    const formData = new FormData();

    formData.append("name", prodName)
    formData.append("brand", prodBrand)
    formData.append("price", prodPrice)
    formData.append("category", category)
    formData.append("image", prodImage)
    formData.append("discount", prodDiscount)
    
    const addProducts = async () => {
        try{

            const response = await axios.post(`http://localhost:4000/createProduct?adminId=${adminId}`, formData, {withCredentials: true})
            console.log(response);
            dispatch(addProduct(response.data.productCreated))
            setSuccessMsg(response.data.message)
            console.log(selector);

            navigate("/admin/allProducts")
        }

        catch(e){
            console.log(e);
            setError(e.message)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        addProducts();

        setProdName("");
        setProdBrand("");
        setProdPrice("");
        setCategory("");
        setProdImage("");
        setProdDiscount(0);

    }
    
    return(
        <>
        <div className="main-div">
            <div className="prodDiv">
                <h2>Hey Admin! Add your <span className="title">Products Here</span></h2>

                <form className="prodForm" action="post" onSubmit={handleSubmit} encType="multipart/form-data">
                    <input className="ptName" type="text" placeholder="Product name..." required value={prodName} onChange={(e)=> setProdName(e.target.value)}/>
                    <input className="ptBrand" type="text" placeholder="Product brand..." required value={prodBrand} onChange={(e)=> setProdBrand(e.target.value)}/>
                    <input className="ptPrice" type="number" placeholder="Price" required min={0} value={prodPrice} onChange={(e)=> setProdPrice(e.target.value)}/>

                    <select name="category"  className="ctgry"  required value={category} onChange={(e)=> setCategory(e.target.value)}>
                        <option>Sports wear</option>
                        <option>Cropped</option>
                        <option>Full Sleeve</option>
                        <option>Half sleeve</option>
                        <option>Hoodie</option>
                        <option>Sleeveless</option>
                    </select>

                    <input type="file" name="image" className="ptImage"  onChange={(e)=> setProdImage(e.target.files[0])}/>
                    <input type="number" className="ptDisc" placeholder="Product Discount if any" value={prodDiscount} onChange={(e)=> setProdDiscount(e.target.value)}/>

                    <button className="addBtn" type="submit">Add Product</button>
                </form>
                <p>{successMsg}</p>
                <p>{error}</p>
                
            </div>
        </div>
        </>
    )
}